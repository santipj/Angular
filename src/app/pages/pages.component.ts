import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';


 declare var customInitFunctions: any ;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit  {
  

  constructor(private SettingService: SettingService){

  }

  ngOnInit():void{

    customInitFunctions();
    

  }

}
