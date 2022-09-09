import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

const BASE_URL_TO_ADD_STUDENT ="http://localhost:8086/addStudent";
const BASE_URL_TO_GET_STUDENTS ="http://localhost:8086/getAllStudents";
const BASE_URL_TO_DELETE_STUDENT ="http://localhost:8086/deleteStudent";
const BASE_URL_TO_UPDATE_STUDENT ="http://localhost:8086/update";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(){
    return this.http.get(BASE_URL_TO_GET_STUDENTS)
  }

  addStudent(student: {
    rollNumber:number;
    firstName:string;
    lastName:string;
    dob:string;
    standard:number;
  })
  {
    return this.http.post(BASE_URL_TO_ADD_STUDENT,student)
  }

  deleteStudent(student: any) {
    return this.http.delete(BASE_URL_TO_DELETE_STUDENT, student.id)
  }

  updateStudent(student: any) {
    return this.http.put(BASE_URL_TO_UPDATE_STUDENT, student.id)
  }

  constructor(public http: HttpClient) { }
}
