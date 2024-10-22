import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../models/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleResponse> {
    return this.http.get('https://swapi.dev/api/people/') as Observable<PeopleResponse>;
  }
}
