import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectContainerComponent } from './create-project-container.component';

describe('CreateProjectContainerComponent', () => {
  let component: CreateProjectContainerComponent;
  let fixture: ComponentFixture<CreateProjectContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
