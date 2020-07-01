import { Component, OnInit } from '@angular/core';
import { FilmSection } from './FilmSection';

@Component({
  selector: 'film-card-list',
  templateUrl: './film-card-list.component.html',
  styleUrls: ['./film-card-list.component.scss']
})
export class FilmCardListComponent {

  filmSections: FilmSection[] = [
    {
      genre: "Drama",
      films: ["Shawshank Redemption", "Flight", "Do The Right Thing", "The Godfather", "Taxi Driver"]
    },
    {
      genre: "Action",
      films: ["Preditor", "Die Hard", "Total Recall", "The Matrix", "Bad Boys"]
    },
    {
      genre: "Horror",
      films: ["Alien", "The Thing", "Carrie", "The Shining", "Cabin In The Woods"]
    },
    {
      genre: "Comic",
      films: ["Superman", "Batman", "X-Men", "Spiderman", "Watchmen"]
    },
    {
      genre: "Italian",
      films: ["L'Aventurra", "La Notte", "L'Eclise", "Il Deserto Rosso", "8 1/2"]
    },
    {
      genre: "French",
      films: ["Vivre Sa Vie", "Breathless", "Shoot the Piano Player", "Cléo from 5 to 7", "Weekend"]
    },
    {
      genre: "Sci-Fi",
      films: ["Star Wars", "Robocop", "BladeRunner", "Minority Report", "Deus Ex Machina"]
    },
    {
      genre: "Comedy",
      films: ["Get Him To The Greek", "Superbad", "This is The End", "The Hangover", "Anchorman"]
    },
    {
      genre: "Adventure",
      films: ["Indiana Jones", "Jumanji", "Cast Away", "Back To The Future", "The Maze Runner"]
    },
    {
      genre: "Family",
      films: ["The Lion King", "Aladdin", "The Little Mermaid", "Mulan", "Fantasia"]
    },
    {
      genre: "Suspense",
      films: ["Knives Out", "Aladdin", "The Little Mermaid", "Mulan", "Fantasia"]
    },
  ]
}
