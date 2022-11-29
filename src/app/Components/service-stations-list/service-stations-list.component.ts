import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceStation } from 'src/Models/ServiceStation.model';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-service-stations-list',
  templateUrl: './service-stations-list.component.html',
  styleUrls: ['./service-stations-list.component.scss']
})
export class ServiceStationsListComponent implements OnInit {

  constructor(public signalRService : SignalRServiceStationsService, private http : HttpClient ) {
   }

  ngOnInit(): void {
    this.signalRService.startServiceStationsConnection();
    this.signalRService.addTransferServiceStationsDataListener();
  }
}
