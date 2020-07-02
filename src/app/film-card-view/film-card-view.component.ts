import { Component, OnInit, Input } from '@angular/core';
import { FilmSection } from '../film-card-list/FilmSection';

@Component({
  selector: 'app-film-card-view',
  templateUrl: './film-card-view.component.html',
  styleUrls: ['./film-card-view.component.scss']
})
export class FilmCardViewComponent implements OnInit {

  @Input() filmSection: FilmSection

  constructor() { }

  ngOnInit(): void {
  }

}
