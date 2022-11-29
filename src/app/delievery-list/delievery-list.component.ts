import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-delievery-list',
  templateUrl: './delievery-list.component.html',
  styleUrls: ['./delievery-list.component.scss']
})
export class DelieveryListComponent implements OnInit {

  constructor(public signalRService : SignalRServiceStationsService, private http : HttpClient) {   
   }

  ngOnInit(): void {
    this.signalRService.startOrdersToDelieveryConnection();
    this.signalRService.addTransferOrdersToDelieveryDataListener();
  }


}
