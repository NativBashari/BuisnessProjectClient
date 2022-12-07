import { ThisReceiver } from "@angular/compiler";
import * as signalR from "@microsoft/signalr";
import { Injectable } from "@angular/core";
import { ServiceStation } from "src/Models/ServiceStation.model";
import { Order } from "src/Models/Order.model";
import { Observable } from "rxjs";
@Injectable()

export class SignalRServiceStationsService{

    public serviceStationsData : ServiceStation[];
    public ordersToPrepareData : Order[];
    public ordersToDelieveryData: Order [];
    private serviceStationsHubConnection : signalR.HubConnection | null;
    private ordersToPrepareHubConnection : signalR.HubConnection | null;
    private ordersToDelieveryHubConnection: signalR.HubConnection | null;

    constructor(){
      this.serviceStationsData =[];  
      this.ordersToPrepareData = [];
      this.ordersToDelieveryData = [];
      this.serviceStationsHubConnection = null;
      this.ordersToPrepareHubConnection = null;
      this.ordersToDelieveryHubConnection = null;
        
    }

    public startServiceStationsConnection(connectionHubUrl: string){
      this.serviceStationsHubConnection = new signalR.HubConnectionBuilder()
      .withUrl(connectionHubUrl, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();
      this.serviceStationsHubConnection
      .start()
      .then(() => console.log("Service stations connection started"))
      .catch(err => console.log('Error while service stations connection: '+ err))  
    }
   public addTransferServiceStationsDataListener(listenerName: string){
    this.serviceStationsHubConnection!.on(listenerName, (data) => {
      this.serviceStationsData = data;
    } )
   }
   public startOrdersToPrepareConnection(connectionHubUrl: string){
    this.ordersToPrepareHubConnection = new signalR.HubConnectionBuilder()
    .withUrl(connectionHubUrl, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
    this.ordersToPrepareHubConnection
    .start()
    .then(() => console.log("Orders to prepare connection started"))
    .catch(err => console.log("error while starting orders to prepare connection" + err))
  }
  public addTransferOrdersToPrepareDataListener(listenerName: string){
    this.ordersToPrepareHubConnection!.on(listenerName, (data) => {
      this.ordersToPrepareData = data;
 
    })
  }
  public startOrdersToDelieveryConnection(connectionHubUrl: string){
    this.ordersToDelieveryHubConnection = new signalR.HubConnectionBuilder()
    .withUrl(connectionHubUrl, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
    this.ordersToDelieveryHubConnection
    .start()
    .then(() => console.log("Order to delievery connection started"))
    .catch(err => console.log("error while starting the order to delievery connection" + err));
  }
  public addTransferOrdersToDelieveryDataListener(listenerName: string){
     this.ordersToDelieveryHubConnection!.on(listenerName, (data) => {
        this.ordersToDelieveryData = data;
    })
  } 
}
