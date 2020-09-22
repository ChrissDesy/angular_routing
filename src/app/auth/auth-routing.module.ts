import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'auth',
    component: HomeComponent,
    // pathMatch: 'full',
    children: [
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        },
        {
          path: '**',
          redirectTo: 'login'
        }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
