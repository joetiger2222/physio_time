import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsuspendedtimesComponent } from './viewsuspendedtimes.component';

describe('ViewsuspendedtimesComponent', () => {
  let component: ViewsuspendedtimesComponent;
  let fixture: ComponentFixture<ViewsuspendedtimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsuspendedtimesComponent]
    });
    fixture = TestBed.createComponent(ViewsuspendedtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
