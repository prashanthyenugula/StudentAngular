import { Component, OnInit } from '@angular/core';
import Student from 'src/app/entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

  student: Student = new Student();
  students:Student[] = [];

  deleteRow(student, index)   {
    const observable = this.studentService.deleteStudent(student)
    observable.subscribe((response:any) =>{
      console.log(response);
      this.students.splice(index,1)

    })
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
