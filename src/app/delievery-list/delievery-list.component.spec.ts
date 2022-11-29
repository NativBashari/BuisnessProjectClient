import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelieveryListComponent } from './delievery-list.component';

describe('DelieveryListComponent', () => {
  let component: DelieveryListComponent;
  let fixture: ComponentFixture<DelieveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelieveryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelieveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
