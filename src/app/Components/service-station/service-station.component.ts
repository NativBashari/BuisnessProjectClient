import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { ServiceStation } from 'src/Models/ServiceStation.model';

@Component({
  selector: 'app-service-station',
  templateUrl: './service-station.component.html',
  styleUrls: ['./service-station.component.scss']
})
export class ServiceStationComponent implements OnInit{

  @Input() serviceStation: ServiceStation;

  constructor() {
      this.serviceStation =  {id :0 , customers : []};
   }

  ngOnInit(): void {

  }

}
