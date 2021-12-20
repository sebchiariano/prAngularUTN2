import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { userI } from 'src/app/interfaces/userI';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogin:boolean = false;

  userInfo= JSON.parse(localStorage.getItem("userInfo"));
  usuarioLogueado="";

  constructor(private _usuarios:UsuariosService) { 

    this._usuarios.isAuthenticate()
    .subscribe(login=> {

      this.isLogin=login;

      if(this.isLogin)
      {
        this.setLoggedUser()
      }

    })

   
    
  }


  ngOnInit(): void {
    if(this.userInfo)
    {
      this.usuarioLogueado=this.userInfo.email;
    }
    
  }

  logout(){
    this._usuarios.logout();
  }

  async setLoggedUser(  ){
    
    this.usuarioLogueado= (await this._usuarios.getUserData()).email;
    
  }
}
