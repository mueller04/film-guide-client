import { Component, OnInit } from '@angular/core';
import { FilmSection } from './FilmSection';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getFilmSections } from '../state/app.reducer';

@Component({
  selector: 'film-card-list',
  templateUrl: './film-card-list.component.html',
  styleUrls: ['./film-card-list.component.scss']
})
export class FilmCardListComponent implements OnInit {

  filmSections: FilmSection[] | void;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.select(getFilmSections).subscribe(
      filmSections => this.filmSections = filmSections
    )
  }
}
