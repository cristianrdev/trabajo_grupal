import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],

  exports: [
    LoginComponent,
    RegisterComponent


  ],

  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
  ]
})
export class LoginModule { }