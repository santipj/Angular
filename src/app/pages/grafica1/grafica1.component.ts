
import { Component } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';
import {  } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})



export class Grafica1Component {

  labels: string[] =  ['Zapatos','Medias','Camisas','Shorts' ];


  public data1: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
           { data: [100, 50, 10,30] },
    ],
  };



}
