import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConcertAdminComponent } from './liste-concert-admin.component';

describe('ListeConcertAdminComponent', () => {
  let component: ListeConcertAdminComponent;
  let fixture: ComponentFixture<ListeConcertAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConcertAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConcertAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
