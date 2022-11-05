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
  public agregarCarrito(producto:Producto){
    this.carrito.push(producto);
    this.guardarEnStorage();
  }

  private guardarEnStorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }
}
