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
              private carritoServices: CarritoService) {
    // this.productos = this.productService.getProducto();
    this.productService.getProductoFB().subscribe(res=>{this.productos=res});
    this.imgDefault = this.productService.imgDefault;
  }

  public agregarCarrito(producto:Producto){
    this.carritoServices.agregarCarrito(producto);
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
