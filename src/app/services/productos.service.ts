import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/interfaces/Productos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

const body = { title: 'Angular POST Request Example' };

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
  
  //NODE
  getAllProducts(){
    return this.http.get("http://localhost:3000/products").toPromise();
  }

 
  getById(id:string)
  {
    return this.http.get("http://localhost:3000/products/"+id).toPromise();
  }

  addProduct(product:Producto){
    return this.http.post<Producto>("http://localhost:3000/products/", product, httpOptions);
  }

  updateProduct(product:Producto,id){
    return this.http.put<Producto>("http://localhost:3000/products/"+id, product, httpOptions);
  }

  deleteProduct(id){
    return this.http.delete("http://localhost:3000/products/"+id);
  }

  //JSONFY
  getAllProductsJSONFY(){
    return this.http.get("https://jsonfy.com/items").toPromise();
  }

  getAllProductsDestacadosJSONFY(){ //Se deberia consultar un endpoint que traiga los destacados, al no existir en la api de jsonfy se utiliza el mismo endpoint de productos a modo de ejemplo
    return this.http.get("https://jsonfy.com/items").toPromise();
  }

  getByIdJSONFY(id:string)
  {
    return this.http.get("https://jsonfy.com/items/"+id).toPromise();
  }


 

}
