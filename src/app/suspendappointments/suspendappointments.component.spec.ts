import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendappointmentsComponent } from './suspendappointments.component';

describe('SuspendappointmentsComponent', () => {
  let component: SuspendappointmentsComponent;
  let fixture: ComponentFixture<SuspendappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuspendappointmentsComponent]
    });
    fixture = TestBed.createComponent(SuspendappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
