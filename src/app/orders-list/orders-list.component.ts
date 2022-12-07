import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  animations: [
    trigger('listAnimation' ,[
      state('flyIn', style({transform: 'translateX(0)'})),
      transition(':enter' ,[
        style({transform : 'translateX(1500px)'}),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({transform: 'translateX(-900px)'}))
      ])
    ])
  ]
})
export class OrdersListComponent implements OnInit {
  @Input() isDelievery: boolean = false;

  orders: any[] = [1,2,3,4,5,6,7,8];
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

  add(){
    this.orders.push(1);
  }
  remove(){
    this.orders.pop();
  }

}


