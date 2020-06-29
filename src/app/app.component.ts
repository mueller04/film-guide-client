import { Component } from '@angular/core';
import { FilmCardComponent } from './film-card/film-card.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-guide-client';
}
