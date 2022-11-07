import { Injectable } from '@angular/core';
import { Producto, Productos } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public productos: Producto[];
  private idProductoSelect:number;

  constructor() {
    this.productos = JSON.parse(localStorage.getItem('productos')) || Productos;
    // this.productos=null
  }

  public addProduct(producto:Producto){
    this.productos.push(producto);
    //Guardar en la memoria interna del navegador
    this.guardarEnStorage();
  }

  public getProducto(): Producto[]{
    return this.productos;
  }

  public setIdProductSelected(id:number){
    this.idProductoSelect = id;
  }

  public getProductById(id = -1): Producto{
    if (id!==-1){
      return this.productos[id];
    }
    return this.productos[this.idProductoSelect];
  }
  private guardarEnStorage(){
    localStorage.setItem('productos',JSON.stringify(this.productos));
  }

}

