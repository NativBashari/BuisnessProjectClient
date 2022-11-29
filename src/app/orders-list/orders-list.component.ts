import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/Models/Order.model';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  constructor(public signalRService : SignalRServiceStationsService, private http : HttpClient) { 
  }

  ngOnInit(): void {
    this.signalRService.startOrdersToPrepareConnection();
    this.signalRService.addTransferOrdersToPrepareDataListener();
  }

}
