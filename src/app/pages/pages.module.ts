import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';




@NgModule({
  declarations: [
  DashboardComponent,
  ProgressComponent,
  Grafica1Component,
  PagesComponent
],
exports:[
  DashboardComponent,
  ProgressComponent,
  Grafica1Component,
  PagesComponent

],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
