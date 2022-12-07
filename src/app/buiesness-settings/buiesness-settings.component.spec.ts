import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiesnessSettingsComponent } from './buiesness-settings.component';

describe('BuiesnessSettingsComponent', () => {
  let component: BuiesnessSettingsComponent;
  let fixture: ComponentFixture<BuiesnessSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiesnessSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiesnessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
