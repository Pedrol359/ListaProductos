import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';
import { CarritoService } from '../services/carrito.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public productosCarrito: Producto[];
  public total = 0;
  public imgDefault: string;

  constructor(private carritoServices: CarritoService,
              private router: Router,
              private productService:ProductosService,
              private alertController: AlertController) {
                
    this.imgDefault = this.productService.imgDefault;
    this.carritoServices.getCarrito().subscribe(res =>{
      this.productosCarrito=res;
      this.calcularTotal();
    });
  }

  ngOnInit() {
  }
  
  public async eliminarCarrito(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar el producto del carrito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            const productoEliminado=this.carritoServices.dropProductoCarrito(index);
            this.calcularTotal(productoEliminado[0].precio);
            this.presentAlert('Producto Eliminado del carrito');
            console.log('eliminado');
            console.log(this.productosCarrito);
          }
        }
      ]
    });
    await alert.present();
  }
  // public eliminarCarrito(index: number) {
  //   console.log(this.productosCarrito);
    

    
  // }

  public calcularTotal(precio = -1) {// Actualiza el total o calcula todo los precios
    if (precio !==-1){
      this.total -= precio;
      return;
    }
    for (let i = 0; i < this.productosCarrito.length; i++) {
      this.total += this.productosCarrito[i].precio;
    }
  }

  public verProducto(id_:number){
    //this.router.navigate(['/view-products'],{queryParams:{id:id_}});
    this.router.navigateByUrl(`/view-products/${id_}`);
    //console.log(this.carritoServices.getCarrito());
  }

  public formatear = (valor: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(valor);
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
