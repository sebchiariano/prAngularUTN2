import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  tipoVistaPass: string = 'password';
  passVisible: boolean =false;
  textoBotonVerPass:string = 'Ver Contraseña';

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private formConstr: FormBuilder) 
  {
      this.formularioLogin = this.formConstr.group({

          email: ["",[Validators.required, Validators.email]],
          password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]

      })
  
  }

  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
  }

  login(){  
    console.log(this.formularioLogin.value)
  }
    
  verContrasena()
  {
    if(this.passVisible==false)
    {
      this.tipoVistaPass="text";
      this.textoBotonVerPass = 'Ocultar';
      this.passVisible=true;
    }
    else
    {
      this.tipoVistaPass="password";
      this.textoBotonVerPass = 'Ver Contraseña';
      this.passVisible=false;
    }
    
  }

  
}
