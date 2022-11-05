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
  constructor(private carritoServices: CarritoService) {
    this.productosCarrito = this.carritoServices.getCarrito();
   }

  ngOnInit() {
  }

  public eliminarCarrito(){

  }
  public verProducto(){

  }

  
  

}
