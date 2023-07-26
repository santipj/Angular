import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo: string = '';
  
  get tituloGrafica(){
    if(this.titulo == ''){
      return this.titulo = 'Sin Titulo'
    }else{
      return this.titulo;
    }
  };

  @Input() labels: String[] = [
    'Datas 1',
    'Datas 2',
    'Datas 3',
  ];



  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [250, 130, 70] },
    ],
  };
        
    
  
  

  
 



}
