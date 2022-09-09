import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-getstudents',
  templateUrl: './getstudents.component.html',
  styleUrls: ['./getstudents.component.css']
})
export class GetstudentsComponent implements OnInit {

  student: Student = new Student();
  students:Student[] = [];

  getStudents() {
    const observable = this.studentService.getStudents()
    observable.subscribe((response: any) =>{
      console.log(response);
      this.students = response as Student[];
    },
      function(error) {
       console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents()
    promise.subscribe((response) => {
      console.log(response);
      this.students = response as Student[];
    })
  }

}
