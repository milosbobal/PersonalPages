import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfromComponent } from './contactfrom.component';

describe('ContactfromComponent', () => {
  let component: ContactfromComponent;
  let fixture: ComponentFixture<ContactfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
