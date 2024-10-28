import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonBattleResponse, PokemonList } from '../../models/pokemon-battle.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrl: './pokemon-battle-component.component.css'
})

export class PokemonBattleComponentComponent implements OnInit {
  listadoPokemon: PokemonList[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: PokemonBattleResponse) => {
      this.listadoPokemon = response.results;
    });
  }


}


