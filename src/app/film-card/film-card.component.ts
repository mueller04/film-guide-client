import { FilmSection } from './../film-card-list/FilmSection';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {

  @Input() filmSection: FilmSection

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['../film-card-view', this.filmSection.genre.toLowerCase()])
  }
}