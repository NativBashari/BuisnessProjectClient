import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/Models/Order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  
  constructor() {
    this.order = {id :0 , products: [] , estimatedTime: new Date(), isFailed: false, isDelievery : false, delieveryFailed: false}

   }

  ngOnInit(): void {
    console.log(this.order.id);
  }

}
