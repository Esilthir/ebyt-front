import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeAdminComponent } from './liste-commande-admin.component';

describe('ListeCommandeAdminComponent', () => {
  let component: ListeCommandeAdminComponent;
  let fixture: ComponentFixture<ListeCommandeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommandeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
