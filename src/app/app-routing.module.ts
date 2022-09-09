import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstudentsComponent } from './Components/getstudents/getstudents.component';
import { StudentComponent } from './Components/student/student.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';
import { DeletestudentComponent } from './Components/deletestudent/deletestudent.component';

const routes: Routes = [{path:'addStudent',
component:StudentComponent},
{path:'getAllStudents', component:GetstudentsComponent},
{path:'deleteStudent',component: DeletestudentComponent},
{path:'updateStudent', component:UpdatestudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
