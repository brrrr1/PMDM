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


  id1: number = 0;
  id2: number = 0;
  listadoPokemon: PokemonList[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: PokemonBattleResponse) => {
      this.listadoPokemon = response.results;
    });
  }

  atacar() {
    // Assuming you have a progress bar element for the Pokemon
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      const currentValue = parseFloat(progressBar.getAttribute('value') || '100');
      const newValue = Math.max(0, currentValue - 25); // Reduce value by 25, but not below 0
      progressBar.setAttribute('value', newValue.toString());
    }
  }


}


