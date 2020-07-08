import { FilmSectionsEffectService } from './services/film-sections-effect.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FilmSectionsService } from './services/film-sections.service';
import { appRoutes } from './nav/routes';
import { reducers } from './root-store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { HeaderComponent } from './header/header.component';
import { FilmCardListComponent } from './film-card-list/film-card-list.component';
import { FilmCardViewComponent } from './film-card-view/film-card-view.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    HeaderComponent,
    FilmCardListComponent,
    FilmCardViewComponent
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
    }),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    EffectsModule.forRoot([FilmSectionsEffectService])
  ],
  providers: [FilmSectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
