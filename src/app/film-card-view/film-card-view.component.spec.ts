import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardViewComponent } from './film-card-view.component';

describe('FilmCardViewComponent', () => {
  let component: FilmCardViewComponent;
  let fixture: ComponentFixture<FilmCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
