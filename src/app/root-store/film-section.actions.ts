import { FilmSection } from './../film-card-list/FilmSection';
import { createAction, props } from '@ngrx/store'

export const retrieveFilmsSections = createAction(
    '[Film Section] Retrieve Film Sections'
);

export const loadFilmSectionsFromApi = createAction(
    '[Film Section] Load Film Sections From API',
    props<{ filmSections: FilmSection[] }>()
);