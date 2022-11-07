import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {

 ionicForm: FormGroup;
  public isSubmitted = false;
  private producto:Producto;

  constructor(
    private productosService:ProductosService, 
    public formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    //this.producto.nombre="";
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      precio: ['', [Validators.required, Validators.pattern('([0-9])+(\.([0-9]{1,2}))?')]],
      imagen: ['', []]
    })
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.producto={
        nombre:this.ionicForm.value.nombre.toString(),
        precio:Number(this.ionicForm.value.precio),
        foto:this.ionicForm.value.imagen.toString()
      };
      //this.producto.nombre=this.ionicForm.value.nombre.toString();
      //this.producto.precio=Number(this.ionicForm.value.precio);
      console.log(this.producto);
      this.productosService.addProduct(this.producto);
      this.presentToast('bottom');
    }
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: '¡Producto Agregado!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
