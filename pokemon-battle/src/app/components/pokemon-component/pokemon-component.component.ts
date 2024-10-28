import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonList } from '../../models/pokemon-battle.interface';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent {


  @Input() pokemon: PokemonList | undefined;

  constructor(private pokemonService : PokemonService) { }


}
