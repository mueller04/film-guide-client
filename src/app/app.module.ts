import { reducers } from './state/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FilmCardListComponent } from './film-card-list/film-card-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'



@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    HeaderComponent,
    FilmCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Film Guide Client DevTools',
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
