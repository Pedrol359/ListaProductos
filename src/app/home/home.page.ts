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

  constructor(private productService: ProductosService, 
              private router: Router,
              private carritoServices: CarritoService) {
    this.productos = this.productService.getProducto();
  }

  public agregarCarrito(idProducto:number){
    this.carritoServices.agregarCarrito(this.productos[idProducto]);
  }
  public verProducto(id_:string){
    //this.router.navigate(['/view-products'],{queryParams:{id:id_}});
    this.router.navigateByUrl(`/view-products/${id_}`);
    //console.log(this.carritoServices.getCarrito());
  }
  public verCarrito(){
    this.router.navigate(['/carrito']);
  }
  public agregarProductos(){
    this.router.navigate(['/add-products']);
  }
  
  // public removeStudent(pos: number){
  // }
  // public getStudentByControlNumber(cn: string){
  //   this.router.navigate(['/view-student'], {
  //     queryParams: {controlnumber: cn}
  //   });
  // }

}
