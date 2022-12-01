import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceStation } from 'src/Models/ServiceStation.model';

@Component({
  selector: 'app-service-station',
  templateUrl: './service-station.component.html',
  styleUrls: ['./service-station.component.scss']
})
export class ServiceStationComponent implements OnInit{

  @Input() serviceStation: ServiceStation;

  constructor(private http: HttpClient) {
      this.serviceStation =  {id :0 , customers : []};
   }

  ngOnInit(): void {

  }

  closeServiceStation(){
    this.http.get(`${environment.baseApiUrl}/ServiceStations/CloseServiceStation/${this.serviceStation.id}`)
    .subscribe(res => console.log(res));
  }

}
