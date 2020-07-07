import { FilmSectionsService } from './../services/film-sections.service';
import { Component, OnInit } from '@angular/core';
import { FilmSection } from './FilmSection';
import { Store } from '@ngrx/store';
import { AppState } from '../root-store/app.state';
import { getFilmSections } from '../root-store/film-card-list-store/film-card-list.reducer';

@Component({
  selector: 'film-card-list',
  templateUrl: './film-card-list.component.html',
  styleUrls: ['./film-card-list.component.scss']
})
export class FilmCardListComponent implements OnInit {

  filmSections: FilmSection[] | void;

  constructor(private store: Store<AppState>, private filmSectionsService: FilmSectionsService) {}

  ngOnInit(): void {
    this.filmSectionsService.getFilmSections();

    this.store.select(getFilmSections).subscribe(
      filmSections => this.filmSections = filmSections
    )
  }
}
