import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheConcertComponent } from './fiche-concert.component';

describe('FicheConcertComponent', () => {
  let component: FicheConcertComponent;
  let fixture: ComponentFixture<FicheConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
