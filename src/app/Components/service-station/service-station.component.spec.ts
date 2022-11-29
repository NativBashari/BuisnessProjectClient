import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStationComponent } from './service-station.component';

describe('ServiceStationComponent', () => {
  let component: ServiceStationComponent;
  let fixture: ComponentFixture<ServiceStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
