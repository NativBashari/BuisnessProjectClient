import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignalRServiceStationsService } from 'src/Services/signal-r-service-stations.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceStationsListComponent } from "./Components/service-stations-list/service-stations-list.component";
import { ServiceStationComponent } from './Components/service-station/service-station.component';
import { HeaderComponent } from './Components/header/header.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServiceStationsListComponent,
    ServiceStationComponent,
    HeaderComponent,
    OrdersListComponent,
    OrderComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SignalRServiceStationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
