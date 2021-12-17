import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false));
  
  constructor() { }

  login(email:string, password:string){
    this.authenticationState.next(true)

    localStorage.setItem("login","true");
  }

  logout(){
    this.authenticationState.next(false)
    localStorage.removeItem("login")
  }

  isAuthenticated(){
    return this.authenticationState.getValue
  }

  isAuthenticate(){
    return this.authenticationState
  }
}
