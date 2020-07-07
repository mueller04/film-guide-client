import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FilmSectionsService {

  constructor(private http: HttpClient) { }

  getFilmSections() {
    this.http.get('http://localhost:8080/api/film-sections').subscribe(data => {
      console.log(data)
    })
  }
}
