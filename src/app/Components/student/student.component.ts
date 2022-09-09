import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = new Student();
  students:Student[] = [];

  save(){
    const observable = this.studentService.addStudent(this.student)
    observable.subscribe(
      (response : any) => {
        console.log(response);
        alert("Student added successfully!")
      },
      function(error){
        console.log(error);
        alert("something went wrong, please try again!")
      }
    )
  }

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {

  }

}
