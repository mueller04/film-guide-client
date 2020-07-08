import { FilmSection } from './../film-card-list/FilmSection';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FilmState } from '../root-store/film-card-list-store/film.state';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FilmSectionsService {

  constructor(private http: HttpClient) { }

  getFilmSections() {
    return this.http.get<FilmState>('http://localhost:8080/api/film-sections')
  }
}