import { Routes } from '@angular/router';
import { FilmCardListComponent } from './../film-card-list/film-card-list.component';
import { FilmCardViewComponent } from "../film-card-view/film-card-view.component";

export const appRoutes: Routes = [
    {path: 'film-card-view/:genre', component: FilmCardViewComponent},
    {path: 'film-card-list', component: FilmCardListComponent},
    {path: '', redirectTo: '/film-card-list', pathMatch: 'full'}
]