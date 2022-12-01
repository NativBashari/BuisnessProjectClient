import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-service-stations-list',
  templateUrl: './service-stations-list.component.html',
  styleUrls: ['./service-stations-list.component.scss']
})
export class ServiceStationsListComponent implements OnInit {

  constructor(public signalRService : SignalRServiceStationsService) {
   }

  ngOnInit(): void {
    this.signalRService.startServiceStationsConnection(environment.serviceStationsHubUrl);
    this.signalRService.addTransferServiceStationsDataListener('TransferServiceStationsData');
  }
}
