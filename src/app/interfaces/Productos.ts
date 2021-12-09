export interface Producto{
    id:number;
    name:string;
    description:string;
    wholesale_price:number;
    price:number;
    photo_url:string;
    stock:number;
    sales:number;
    active:number;
    date_add:Date;
    date_upd:Date;
    bra_ite_fk:number;  
}