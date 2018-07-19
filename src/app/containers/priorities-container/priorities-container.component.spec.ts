import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesContainerComponent } from './priorities-container.component';

describe('PrioritiesContainerComponent', () => {
  let component: PrioritiesContainerComponent;
  let fixture: ComponentFixture<PrioritiesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioritiesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
