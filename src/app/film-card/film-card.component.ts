import { FilmSection } from './../film-card-list/FilmSection';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {

  @Input() filmSection: FilmSection
}
