import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  startBtnClicked: boolean;
  pauseBtnClicked: boolean;

  constructor(private http: HttpClient) {
    this.startBtnClicked = false;
    this.pauseBtnClicked = false;
   }

  ngOnInit(): void {
  }
  start(){
    this.http.get("http://localhost:5171/api/Manager/Start").subscribe(res => console.log(res));
    this.startBtnClicked=true;
 }

 pause(){
  this.http.get("http://localhost:5171/api/Manager/Pause").subscribe(res => console.log(res));
  this.pauseBtnClicked = true;
 }
 continue(){
  this.http.get("http://localhost:5171/api/Manager/Continue").subscribe(res => console.log(res));
  this.pauseBtnClicked = false;
 }
}
