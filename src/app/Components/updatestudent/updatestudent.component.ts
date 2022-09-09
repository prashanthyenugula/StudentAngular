import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  student: Student = new Student();
  students:Student[] = [];

  studentDetails = {
    rollNumber:0,
    firstName:"",
    lastName:"",
    dob:"",
    standard:0

  }

  updatestudent(){
    const observable = this.studentService.updateStudent(this.studentDetails) 
    observable.subscribe((response:any) => {
      console.log(response);
    },
      function(error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}
