import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

//Routes
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  public producto: Producto;

  constructor(private productosService:ProductosService, private aroute: ActivatedRoute) { } //First on execute

  ngOnInit() { 

    // this.aroute.queryParams.subscribe(
    //   (params) => {
    //     this.producto = this.productosService.getProductById(parseInt(params));
    //   }
    // ); //Build as a promise
  }

}
