import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStationsListComponent } from './service-stations-list.component';

describe('ServiceStationsListComponent', () => {
  let component: ServiceStationsListComponent;
  let fixture: ComponentFixture<ServiceStationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceStationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
