import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Productos';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})

export class CompraComponent implements OnInit {

  loading:boolean=true;
  producto:Producto;
  cantidadCompra:number=1;
  total:number;
  mensajeStock:string="";

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor( 
    private activatedRoute:ActivatedRoute, 
    private productosService:ProductosService
    ) { }

  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() {

    try{  
      const id= this.activatedRoute.snapshot.paramMap.get("id")
      const productoAux= await this.productosService.getById(id);
    
      this.producto=JSON.parse(JSON.stringify(productoAux));
      
      this.loading=false;

      this.actualizarTotal();
    }
    catch(e)
    {
      console.log(e);
    }


  }

  actualizarTotal():void{
    this.total=(this.producto.price)*(this.cantidadCompra);
  }

  incrementarCantidad():void {

    if(this.cantidadCompra<this.producto.available_quantity)
    {
      this.cantidadCompra=this.cantidadCompra+1;
      this.mensajeStock=""
    }
    if(this.cantidadCompra==this.producto.available_quantity)
    {
      this.mensajeStock="No se pueden agregar mas productos. Supera Stock disponible"
    }

    this.actualizarTotal();
  }

  reducirCantidad():void {

    if(this.cantidadCompra>1)
    {
      this.cantidadCompra=this.cantidadCompra-1;
      this.mensajeStock=""
    }
    this.actualizarTotal();
  }
}
