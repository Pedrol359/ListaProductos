import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../models/producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito:Producto[];
  constructor(private firestore: AngularFirestore) {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];    
      this.getCarrito().subscribe(res =>{
        this.carrito=res;
      });
   }

   public getCarrito(){
    return this.firestore.collection('Carrito').snapshotChanges().pipe(
            map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return { id, ...data }; 
        });
      })
    );
  }  

  public dropProductoCarrito(index: number){
    const itemDroped = this.carrito.splice(index,1);
    this.guardarEnStorage();
    this.firestore.collection('Carrito').doc(itemDroped[0].id).delete();
    return itemDroped;
  }
  public agregarCarrito(producto:Producto){
    delete producto.id;
    this.firestore.collection('Carrito').add(producto);
    this.carrito.push(producto);
    this.guardarEnStorage();
  }
  private guardarEnStorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }
}
