import { Component, OnInit } from '@angular/core';
import { FilmSection } from '../film-card-list/FilmSection';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../root-store/app.state';
import { getFilmSectionByGenre } from '../root-store/film-card-list-store/film-card-list.reducer';

@Component({
  selector: 'app-film-card-view',
  templateUrl: './film-card-view.component.html',
  styleUrls: ['./film-card-view.component.scss']
})
export class FilmCardViewComponent implements OnInit {

  filmSection: FilmSection
  genre: string

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre')

    
      this.store.select(getFilmSectionByGenre(this.genre)).subscribe(
        filmSection => this.filmSection = filmSection
      )
    })
  }
}
