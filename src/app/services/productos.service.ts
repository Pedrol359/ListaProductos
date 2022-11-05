import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public productos: Producto[];
  private idProductoSelect:number;

  constructor() {
    this.productos=[{
      nombre:"Sopa en lata",
      precio:10,
      foto:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lavanguardia.com%2Fcomer%2Ftendencias%2F20180222%2F44940929169%2Fsopa-campbells-andy-warhol-arte-pop.html&psig=AOvVaw0NQ0IePI-R3PyEU_1B6JgM&ust=1667662342107000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJDx_8DslPsCFQAAAAAdAAAAABAM"
  },
  {
      nombre:"Leche Lala",
      precio:12,
      foto:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiendasneto.com.mx%2Fleche-entera-lala-1-89-lt&psig=AOvVaw0v5rnAMhW5IyWUnfOKQvUa&ust=1667662431922000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiCk-zslPsCFQAAAAAdAAAAABAD"
  },
  {
      nombre:"Arroz",
      precio:9,
      foto:"https://m.media-amazon.com/images/I/71uxWp5AqnL._AC_SX425_.jpg"
  },
  {
      nombre:"Gel",
      precio:98,
      foto:"https://tiendasneto.com.mx/media/catalog/product/cache/cb1e6b076f68ee0ac6e5e542f63310fa/7/1/7100004654-1_12.jpg"
  },
  {
      nombre:"Gel Antibacterial",
      precio:29,
      foto:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750224476448L.jpg"
  },
  {
      nombre:"Gel",
      precio:98,
      foto:""
  },
  {
      nombre:"Gel",
      precio:98
  },
  {
      nombre:"Gel",
      precio:98
  }];
  }

  public getProducto(): Producto[]{
    return this.productos;
  }

  public setIdProductSelected(id:number){
    this.idProductoSelect = id;
  }

  public getProductById(id = -1): Producto{
    if (id!==-1){
      return this.productos[id];
    }
    return this.productos[this.idProductoSelect];
  }
}

