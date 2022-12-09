import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage implements OnInit {

  public producto: Producto;
  public imgDefault:string;

  constructor(private productosService:ProductosService, private aroute: ActivatedRoute) {
    this.imgDefault = this.productosService.imgDefault;
    this.producto={
      nombre:"",
      precio:0,
      foto:this.imgDefault
    };
   }

  ngOnInit() {
    const id = this.aroute.snapshot.paramMap.get('id');
    this.productosService.getProductByIdFB(id).subscribe(it=>this.producto=it as Producto)
    // this.producto = this.productosService.getProductByIdFB(id);
    //  this.aroute.queryParams.subscribe(
    //    (params) => {
    //      this.producto = this.productosService.getProductById(parseInt(params.id));
    //    }
    //  ); //Build as a promise
  }

}
