import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

//Routes
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public productos: Producto[];
  public imgDefault: string;

  constructor(private productService: ProductosService,
    private router: Router,
    private carritoServices: CarritoService,
    private alertController: AlertController) {

    this.productService.getProducto().subscribe(res => {
      this.productos = res;
    });
    this.imgDefault = this.productService.imgDefault;
  }

  public agregarCarrito(idProducto: number) {
    this.carritoServices.agregarCarrito(this.productos[idProducto]);
    this.presentAlert('¡Producto Agregado al Carrito!');
    console.log('agregado');
    
  }
  public verProducto(id_: number) {
    this.router.navigateByUrl(`/view-products/${id_}`);
  }
  public verCarrito() {
    this.router.navigate(['/carrito']);
  }
  public agregarProductos() {
    this.router.navigate(['/add-products']);
  }

  async presentAlert(mens: string, sub?: string) {
    const alert = await this.alertController.create({
      header: mens,
      subHeader: sub,
      buttons: ['OK'],
    });
    await alert.present();
  }
}