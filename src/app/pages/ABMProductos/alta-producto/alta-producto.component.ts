import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  miFormulario: FormGroup;
  pics: FormArray = new FormArray([], [Validators.required]);
  

  

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private formConstr: FormBuilder,
    private _productosServ: ProductosService

    ) 
  { 
    this.miFormulario= this.formConstr.group({

      title:["",[Validators.required]],
      price:["",[Validators.required]],
      description:["",[Validators.required]],
      warranty: ["",[Validators.required]],
      available_quantity:["",[Validators.required]],
      pictures:this.formConstr.array([this.createPicture()])

    })
   
  }

  
  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    
    
  }

  registrarProducto()
  {
    console.log(this.miFormulario.value)
    this._productosServ.addProduct(this.miFormulario.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  createPicture(): FormGroup {
    return this.formConstr.group({
      secure_url: new FormControl('', [Validators.required]),
     
    });
  }

  addPicture(): void {
    this.pics = this.miFormulario.get('pictures') as FormArray;
    this.pics.push(this.createPicture());
  }

  deletePicture(i): void {
    if(i!=0)
    {
      this.pics = this.miFormulario.get('pictures') as FormArray;
      this.pics.removeAt(i);
      
    }
    else{
      alert("El producto debe contener al menos una imagen")
    }
    
  }
  
  

}
