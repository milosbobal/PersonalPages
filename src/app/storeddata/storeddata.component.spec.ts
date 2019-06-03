import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreddataComponent } from './storeddata.component';

describe('StoreddataComponent', () => {
  let component: StoreddataComponent;
  let fixture: ComponentFixture<StoreddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
