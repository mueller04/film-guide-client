import { createSelector, createReducer, on } from "@ngrx/store";
import { AppState } from "../app.state";
import { FilmState } from "./film.state";
import * as FilmSectionActions from '../film-section.actions'


const initialState: FilmState = {
    filmSections: []
}

export const filmSectionsReducer = createReducer<FilmState>(
    initialState,
    on(FilmSectionActions.loadFilmSectionsFromApi, (state, action): FilmState => {
      return {
        ...state,
        filmSections: action.filmSections
      }
    })
)

const selectFilm = (state: AppState) => state.film

export const getFilmSections = createSelector(
  selectFilm,
  (state: FilmState) => state.filmSections 
);

export const getFilmSectionByGenre = (genre: string) => createSelector(
  selectFilm,
  (state: FilmState) =>  state.filmSections.filter(filmSection => filmSection.genre.toLowerCase() === genre)[0]
);