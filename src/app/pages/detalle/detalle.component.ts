import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../services/productos.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  loading:boolean=true;
  producto:Producto;
  


  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor( 
    private activatedRoute:ActivatedRoute, 
    private _productosService:ProductosService,
    private router:Router
    ) { }

  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() {

    try{  
      const id= this.activatedRoute.snapshot.paramMap.get("id")
      const productoAux= await this._productosService.getById(id);
    
      this.producto=JSON.parse(JSON.stringify(productoAux));
      
      this.loading=false;

    }
    catch(e)
    {
      console.log(e);
    }
  }

  eliminarProducto():void{

    const id= this.activatedRoute.snapshot.paramMap.get("id")

    this._productosService.deleteProduct(id).subscribe(
      (response) => {
        //console.log(response);
        alert("Se elimino el producto!");
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error)
        alert("Ocurrio un error!");
      }
     
    )

  }

}
