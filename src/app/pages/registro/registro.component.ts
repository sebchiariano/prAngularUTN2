import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup;

  tipoVistaPass: string = 'password';
  textoBotonVerPass: string = 'Ver Contraseña';
  passVisible: boolean =false;

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private formConstr: FormBuilder
    ) 
  { 
    this.miFormulario= this.formConstr.group({

      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:["",[]],
      email: ["",[Validators.required, Validators.email]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]

    })
  }

  
  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
  }

  registrarse()
  {
    console.log(this.miFormulario.value)
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