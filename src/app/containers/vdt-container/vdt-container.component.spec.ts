import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdtContainerComponent } from './vdt-container.component';

describe('VdtContainerComponent', () => {
  let component: VdtContainerComponent;
  let fixture: ComponentFixture<VdtContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdtContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
