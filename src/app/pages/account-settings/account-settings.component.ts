import { Component } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})

export class AccountSettingsComponent {

  
  
  constructor(private settingService: SettingService){ }
    
  ngOnInit():void{
    this.settingService.checkCurrentTheme();
  };

  
  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
    
  };

  

}
