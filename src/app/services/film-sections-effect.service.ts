import { FilmSectionsService } from './film-sections.service';
import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators'
import * as FilmSectionActions from '../root-store/film-section.actions'
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class FilmSectionsEffectService {

  constructor(private actions$: ActionsSubject, private FilmSectionsService: FilmSectionsService) { }

  loadFilmSections$ = createEffect(() => this.actions$.pipe(
      ofType(FilmSectionActions.retrieveFilmsSections),
      mergeMap(() => this.FilmSectionsService.getFilmSections().pipe(
          map(data => FilmSectionActions.loadFilmSectionsFromApi({ filmSections: data.filmSections }))
        )
      )
    )
  );
}