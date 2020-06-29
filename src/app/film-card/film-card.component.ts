import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {

  filmSection = {
    genre: "Drama",
    films: ["Shawshank Redemption", "Flight", "Do The Right Thing", "The Godfather", "Taxi Driver"]
  }

}
