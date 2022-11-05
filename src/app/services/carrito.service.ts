import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito:Producto[];
  constructor() {
    // this.carrito=[];
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
   }

  public getCarrito(){
    return this.carrito;
  }
  public dropProductoCarrito(index: number){
    const itemDroped = this.carrito.splice(index,1);
    this.guardarEnStorage();
    return itemDroped;
  }
  public agregarCarrito(producto:Producto){
    this.carrito.push(producto);
    this.guardarEnStorage();
  }
  private guardarEnStorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }
}
