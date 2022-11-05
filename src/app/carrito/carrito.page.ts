import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public productosCarrito: Producto[];
  public total = 0;
  constructor(private carritoServices: CarritoService) {
    this.productosCarrito = this.carritoServices.getCarrito();
    this.calcularTotal();
  }

  ngOnInit() {
  }

  public eliminarCarrito() {

    this.calcularTotal();
  }
  public verProducto() {

  }
  public calcularTotal() {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      this.total += this.productosCarrito[i].precio;
    }

  }

  public formatear = (valor: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(valor);
  }
}