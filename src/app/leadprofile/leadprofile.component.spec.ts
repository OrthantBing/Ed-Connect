import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadprofileComponent } from './leadprofile.component';

describe('LeadprofileComponent', () => {
  let component: LeadprofileComponent;
  let fixture: ComponentFixture<LeadprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
