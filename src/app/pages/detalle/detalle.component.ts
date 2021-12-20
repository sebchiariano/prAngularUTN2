import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../services/productos.service';

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

    }
    catch(e)
    {
      console.log(e);
    }
  }

}
