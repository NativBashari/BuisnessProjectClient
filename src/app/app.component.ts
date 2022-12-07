import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buisness-project-client';
  showBuiesnessSettingsComponent: boolean = false;
  constructor(private http: HttpClient){

  }

  onOpen(param: boolean){
    this.showBuiesnessSettingsComponent = true;
  }

  onClose(param: boolean){
    this.showBuiesnessSettingsComponent = false;
  }
 
}
