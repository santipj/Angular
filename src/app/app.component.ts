import { Component } from '@angular/core';

declare var customInitFunctions: any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPro';

  ngOnInit():void{

    customInitFunctions();
    

  }

}
