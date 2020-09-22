import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
