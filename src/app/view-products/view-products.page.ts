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

  constructor(private productosService:ProductosService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.aroute.snapshot.paramMap.get('id');
    this.producto = this.productosService.getProductById(parseInt(id));
    //  this.aroute.queryParams.subscribe(
    //    (params) => {
    //      this.producto = this.productosService.getProductById(parseInt(params.id));
    //    }
    //  ); //Build as a promise
  }

}
