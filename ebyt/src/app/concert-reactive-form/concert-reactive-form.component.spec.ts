import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertReactiveFormComponent } from './concert-reactive-form.component';

describe('ConcertReactiveFormComponent', () => {
  let component: ConcertReactiveFormComponent;
  let fixture: ComponentFixture<ConcertReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
