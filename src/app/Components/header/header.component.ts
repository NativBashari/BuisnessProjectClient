import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  startBtnClicked: boolean;
  pauseBtnClicked: boolean;
  @Output() openSettings: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.startBtnClicked = false;
    this.pauseBtnClicked = false;
   }

  ngOnInit(): void {
  }
  start(){
    this.openSettings.emit(true);
    this.startBtnClicked=true;
 }

 pause(){
  this.httpClient.get(`${environment.baseApiUrl}/Manager/Pause`).subscribe(res => console.log(res));
  this.pauseBtnClicked = true;
 }
 continue(){
  this.httpClient.get(`${environment.baseApiUrl}/Manager/Continue`).subscribe(res => console.log(res));
  this.pauseBtnClicked = false;
 }
}
