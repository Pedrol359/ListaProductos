import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() { 
    this.students =  [{
      controlnumber: "18401139",
      age: 21,
      career: "ISC",
      curp: "JACJ0006HNT24NA5",
      email: "juaxjacoboco@ittepic.edu.mx",
      name: "Axel Jacobo",
      nip: 871,
      photo: "https://picsum.photos/id/310/500/500"
    },
    {
      controlnumber: "18401121",
      age: 22,
      career: "ARQ",
      curp: "HNT002883JDBCD",
      email: "arqhannah@ittepic.edu.mx",
      name: "Hannah Rodier",
      nip: 123,
      photo: "https://picsum.photos/id/325/500/500"
    },
    {
      controlnumber: "18401121",
      age: 20,
      career: "IBQ",
      curp: "PEAV0012849FHN1",
      email: "peavila@ittepic.edu.mx",
      name: "Pedro Avila",
      nip: 385,
      photo: "https://picsum.photos/id/305/500/500"
    },]
  }

  public getStudents(): Student[]{
    return this.students;
  }

  public removeStudent(index: number){
    this.students.splice(index, 1);
  }

  public getStudentByControlNumber (cn: string): Student{
    let item: Student;
    item = this.students.find(
      (student)=> { //función arrow/flecha
        return student.controlnumber === cn;
      }
    );
    return item;
  }

}

//TSLINT Plugin

