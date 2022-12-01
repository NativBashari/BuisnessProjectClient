import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  startBtnClicked: boolean;
  pauseBtnClicked: boolean;

  constructor(private httpClient: HttpClient) {
    this.startBtnClicked = false;
    this.pauseBtnClicked = false;
   }

  ngOnInit(): void {
  }
  start(){
    this.httpClient.get(`${environment.baseApiUrl}/Manager/Start`).subscribe(res => console.log(res));
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
