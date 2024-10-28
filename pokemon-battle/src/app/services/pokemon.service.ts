import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonBattleResponse } from '../models/pokemon-battle.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemon(): Observable<PokemonBattleResponse> {
    return this.http.get<PokemonBattleResponse>('https://pokeapi.co/api/v2/pokemon/');
  }
}
