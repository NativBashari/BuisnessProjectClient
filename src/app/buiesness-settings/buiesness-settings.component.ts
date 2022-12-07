import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Buiesness } from 'src/Models/buisness.model';

@Component({
  selector: 'app-buiesness-settings',
  templateUrl: './buiesness-settings.component.html',
  styleUrls: ['./buiesness-settings.component.scss']
})
export class BuiesnessSettingsComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter(); 
  buisness: Buiesness = {name: '' , serviceStations: 0 , productionSlots:  0 , delieveryTime: 0, customersEntryRate: 0 };
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


  buisnessSettings: FormGroup = new FormGroup({
    name: new FormControl("Restaurant", [Validators.required, Validators.minLength(2)]),
    serviceStations: new FormControl(1, [Validators.required , Validators.min(1)]),
    productionSlots: new FormControl(1, [Validators.required ,Validators.min(1)]),
    delieveryTime: new FormControl(5, [Validators.required, Validators.min(5)]),
    customersEntryRate: new FormControl(2.5 ,[Validators.required , Validators.min(2.5)])
  })

  setBuisness(){
    if(this.buisnessSettings.valid){
      let name = this.buisnessSettings.controls['name'].value;
      let serviceStations = this.buisnessSettings.controls['serviceStations'].value; 
      let productionSlots = this.buisnessSettings.controls['productionSlots'].value;
      let delieveryTime= this.buisnessSettings.controls['delieveryTime'].value;
      let customersEntryRate = this.buisnessSettings.controls['customersEntryRate'].value;    
      this.sendBuisnessData(name, serviceStations, productionSlots, delieveryTime, customersEntryRate);
    }
    else{
      alert("Form is invalid");
    }
  }
  sendBuisnessData(name: string , serviceStations: number, productionSlots: number, delieveryTime: number, customersEntryRate: number) {
   this.buisness ={
    name: name,
    serviceStations: serviceStations,
    productionSlots: productionSlots,
    delieveryTime: delieveryTime,
    customersEntryRate: customersEntryRate
   }
   this.httpClient.post(`${environment.baseApiUrl}/manager`, this.buisness)
   .subscribe((res)=> {
    console.log(res)
    this.close.emit(false);
    this.httpClient.get(`${environment.baseApiUrl}/Manager/Start`).subscribe(res => console.log(res));
  }); 
  }

}
