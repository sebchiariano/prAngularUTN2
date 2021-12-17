import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


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

import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false));
  

  user$: Observable<User | null>;

  constructor(
    private afAuth: Auth,
    private router: Router
  ) 
  { 
    this.user$ = user(afAuth);

  // or use this version...
  this.user$ = authState(afAuth);

  // or use this version...
  this.user$ = new Observable((observer: any) =>
    onAuthStateChanged(afAuth, observer)
  );


  }
  
  login(email:string, password:string){
    
   
    signInWithEmailAndPassword(this.afAuth, email, password)
    .then(value => {
      this.authenticationState.next(true);
      localStorage.setItem("login","true");
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
      if(err.code=="auth/wrong-password" || err.code=="auth/user-not-found")
      {
          alert("El usuario o la contraseña ingresada son incorrectos")
      }
      

    });

    /*
    this.authenticationState.next(true);
    localStorage.setItem("login","true");
    */
  }

  logout(){

    this.afAuth
    .signOut().then(() => {
         this.authenticationState.next(false);
         localStorage.removeItem("login")
    });

    /*
    this.authenticationState.next(false)
    localStorage.removeItem("login")
    */
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
     console.log('Sucess', value);
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  
}
