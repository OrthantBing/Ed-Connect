import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickertestComponent } from './datepickertest.component';

describe('DatepickertestComponent', () => {
  let component: DatepickertestComponent;
  let fixture: ComponentFixture<DatepickertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
