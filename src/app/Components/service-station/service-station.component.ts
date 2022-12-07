import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceStation } from 'src/Models/ServiceStation.model';

@Component({
  selector: 'app-service-station',
  templateUrl: './service-station.component.html',
  styleUrls: ['./service-station.component.scss']
})
export class ServiceStationComponent implements OnInit{

  queueIconUrl: string = "../assets/queue-icon.png";
  @Input() serviceStation: ServiceStation;
  numOfCustomers : number =0;
  constructor(private http: HttpClient) {
      this.serviceStation =  {id :0 , customers : []};
   }

  ngOnInit(): void {
    this.numOfCustomers = this.serviceStation.customers.length;
  }


  closeServiceStation(){
    this.http.get(`${environment.baseApiUrl}/ServiceStations/CloseServiceStation/${this.serviceStation.id}`)
    .subscribe(res => console.log(res));
  }

  
}
