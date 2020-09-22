import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
