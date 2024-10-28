import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../models/film.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getFilms() : Observable<FilmResponse> {
    return this.http.get('https://swapi.dev/api/films/') as Observable<FilmResponse>;
  }
}
