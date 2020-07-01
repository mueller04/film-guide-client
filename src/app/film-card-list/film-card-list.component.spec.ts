import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardListComponent } from './film-card-list.component';

describe('FilmCardListComponent', () => {
  let component: FilmCardListComponent;
  let fixture: ComponentFixture<FilmCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
