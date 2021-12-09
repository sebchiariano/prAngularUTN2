import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.component.html',
  styleUrls: ['./producto2.component.css']
})
export class Producto2Component implements OnInit {

  hoverClass:string="verDetalle";
  @Input() producto:Producto;

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
