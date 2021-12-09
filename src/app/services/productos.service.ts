import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //CONSTRUCTOR
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor( 
    
    private http:HttpClient 
    
    ) {}


  //FUNCIONES
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getAllProducts(){
    return this.http.get("https://jsonfy.com/items").toPromise();
  }

  getAllProductsDestacados(){ //Se deberia consultar un endpoint que traiga los destacados, al no existir en la api de jsonfy se utiliza el mismo endpoint de productos a modo de ejemplo
    return this.http.get("https://jsonfy.com/items").toPromise();
  }

  getById(id:string)
  {
    return this.http.get("https://jsonfy.com/items/"+id).toPromise();
  }

}
