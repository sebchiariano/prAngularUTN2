import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { userI } from '../interfaces/userI';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {
  Auth,
  signOut,
  signInWithPopup,
  user,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAdditionalUserInfo,
  OAuthProvider,
  linkWithPopup,
  unlink,
  updateEmail,
  updatePassword,
  User,
  reauthenticateWithPopup,
  authState,
  onAuthStateChanged
} from '@angular/fire/auth';



import { Firestore, collectionData, collection,  query, where, orderBy , getDocs, doc, getDoc  } from '@angular/fire/firestore';

import 'rxjs/add/operator/switchMap';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false));
  
  uidUser:string=localStorage.getItem("uidUser");

  

  constructor(
    private afAuth: Auth,
    private router: Router,
    private firestore:Firestore 
  ) 
  {
 
  }
  
  login(email:string, password:string){



    signInWithEmailAndPassword(this.afAuth, email, password)
    .then(value => {
      this.authenticationState.next(true); //cambiar autenticacion estado a true

      localStorage.setItem("login","true");
      //localStorage.setItem("uidUser",value.user.uid);
      localStorage.setItem("userInfo",JSON.stringify({"uid":value.user.uid, "email":value.user.email}));

      //console.log("data", this.getUserData())
      this.router.navigate(['/']);

      this.uidUser=value.user.uid;
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
      if(err.code=="auth/wrong-password" || err.code=="auth/user-not-found")
      {
          alert("El usuario o la contraseña ingresada son incorrectos")
      }
      

    });

  }

  async getUserData(){
    const q = query(collection(this.firestore, "usuarios"), where("userId", "==",this.uidUser));

    const querySnapshot = await getDocs(q);

    var userData:userI;

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      console.log("user", doc.data());
      console.log("userapellido", doc.data().apellido);

      
      userData={

        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        telefono:doc.data().telefono,
        email:doc.data().email,
        perfil:doc.data().perfil,
        userId:doc.data().userId

      }
      
     
      console.log("userDATAINT",userData);
    });

    return userData;
  }

  logout(){

    this.afAuth
    .signOut().then(() => {
         this.authenticationState.next(false);
         localStorage.removeItem("login");
         localStorage.removeItem("uidUser");
    });

  
  }

  isAuthenticated(){
    var isAuthent:boolean;
    isAuthent= this.authenticationState.value;
    return isAuthent;
  }

  isAuthenticate(){
    return this.authenticationState
  }

  emailSignup(email: string, password: string) {
    
    createUserWithEmailAndPassword( this.afAuth, email, password)
    .then(value => {
     console.log('Succes', value);
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  
}
