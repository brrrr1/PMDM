import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../modules/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character') as Observable<CharacterResponse>;
}

}
