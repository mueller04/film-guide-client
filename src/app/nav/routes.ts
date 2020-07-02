import { Routes } from '@angular/router';
import { FilmCardListComponent } from './../film-card-list/film-card-list.component';
import { FilmCardViewComponent } from "../film-card-view/film-card-view.component";

export const appRoutes: Routes = [
    {path: 'film-card-view', component: FilmCardViewComponent},
    {path: 'film-card-list-view', component: FilmCardListComponent},
    {path: '', redirectTo: '/film-card-list-view', pathMatch: 'full'}
]