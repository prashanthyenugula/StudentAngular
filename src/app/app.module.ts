import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StudentComponent } from './Components/student/student.component';
import { GetstudentsComponent } from './Components/getstudents/getstudents.component';
import { DeletestudentComponent } from './Components/deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './Components/updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    GetstudentsComponent,
    DeletestudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
