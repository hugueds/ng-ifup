import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleContainerComponent } from './responsible-container.component';

describe('ResponsibleContainerComponent', () => {
  let component: ResponsibleContainerComponent;
  let fixture: ComponentFixture<ResponsibleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
