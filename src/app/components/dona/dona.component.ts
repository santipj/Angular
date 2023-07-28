import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo: string = 'Sin Titulo';
  @Input('labels') labels: String[] = ['Datas 1', 'Datas 2', 'Datas 3','data 4','data 5' ];
  



  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [250, 130, 70,76,43] },
    ],
  };
        
    
  
  

  
 



}
