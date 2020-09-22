import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
        {
            path: 'first',
            component: FirstComponent
        },
        {
            path: 'second',
            component: SecondComponent
        },
        {
          path: '**',
          redirectTo: '/auth/login'
        }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes), CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
