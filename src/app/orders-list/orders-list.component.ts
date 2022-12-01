import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  @Input() isDelievery: boolean = false;
  constructor(public signalRService : SignalRServiceStationsService) { 
  }

  ngOnInit(): void {
    if(!this.isDelievery){
      this.signalRService.startOrdersToPrepareConnection(environment.ordersHubUrl);
      this.signalRService.addTransferOrdersToPrepareDataListener('TransferOrdersToPrepareData');
    }
    else{
      this.signalRService.startOrdersToDelieveryConnection(environment.delieveryHubUrl);
      this.signalRService.addTransferOrdersToDelieveryDataListener('TransferOrdersToDelieveryData');
    }

  }

}
