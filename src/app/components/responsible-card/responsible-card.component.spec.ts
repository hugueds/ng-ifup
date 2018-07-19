import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleCardComponent } from './responsible-card.component';

describe('ResponsibleCardComponent', () => {
  let component: ResponsibleCardComponent;
  let fixture: ComponentFixture<ResponsibleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
