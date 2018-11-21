import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheConcertComponent } from './recherche-concert.component';

describe('RechercheConcertComponent', () => {
  let component: RechercheConcertComponent;
  let fixture: ComponentFixture<RechercheConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
