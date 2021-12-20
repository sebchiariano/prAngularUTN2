import { Component, Input, OnInit } from '@angular/core';
import { Producto} from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  hoverClass:string="verDetalle";
  @Input() producto:Producto;//

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   constructor(
    
    ) { }

  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
  }

  hoverEnter() {
    this.hoverClass="verDetalleHover";
  }

  hoverLeave() {
    this.hoverClass="verDetalle";
  }

}
