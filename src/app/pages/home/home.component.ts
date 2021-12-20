import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  productos;
  //productosDestacados;
  load:boolean=true;

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    
    private productosService:ProductosService
    
    ) {}

  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit() {
    this.getProductos();
    
  }

  
  async getProductos()
  {
    try
    {
   
      this.productos = await this.productosService.getAllProducts();
      this.load=false;
    }
    catch(e)
    {
      console.log(e);
    }
  }

  /*
  async getProductosDestacados()
  {
    try
    {
      this.productosDestacados= await this.productosService.getAllProductsDestacados();
      this.load=false;
    }
    catch(e)
    {
      console.log(e);
    }
  }
*/
   

}
