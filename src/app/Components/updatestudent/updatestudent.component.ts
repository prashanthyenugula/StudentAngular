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
  id:number = 0;


  update(student){
    console.log(student);
    const observable = this.studentService.updateStudent(this.student, this.id) 
    observable.subscribe((response:any) => {
      console.log(response);
    },
      function(error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  updatestudent(st,j) {
    this.id = st.rollNumber;
    this.student.rollNumber = st.rollNumber
    this.student.firstName = st.firstName
    this.student.lastName = st.lastName
    this.student.dob = st.dob
    this.student.standard = st.standard
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
