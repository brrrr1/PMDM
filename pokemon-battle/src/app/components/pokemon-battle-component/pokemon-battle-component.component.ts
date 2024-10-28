import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokemonBattleResponse, PokemonList } from '../../models/pokemon-battle.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrls: ['./pokemon-battle-component.component.css']
})
export class PokemonBattleComponentComponent implements OnInit {
  listadoPokemon: PokemonList[] = [];
  selectedPokemon: PokemonList[] = []; 
  progress: number[] = [];
  turno1: boolean = true;
  mensajeGanador: string = ''; 

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response: PokemonBattleResponse) => {
      this.listadoPokemon = response.results;
      this.seleccionarPokemonAleatorios();
    });
  }

  seleccionarPokemonAleatorios() {
    const randomId = [
      this.generarRandom(0, this.listadoPokemon.length - 1),
      this.generarRandom(0, this.listadoPokemon.length - 1)
    ];
    this.selectedPokemon = [this.listadoPokemon[randomId[0]], this.listadoPokemon[randomId[1]]];
    this.progress = [100, 100];
    this.mensajeGanador = ''; 
  }

  generarRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  atacar(index: number) {
    if ((this.turno1 && index === 0) || (!this.turno1 && index === 1)) {
      if (this.progress[index] > 0) {
        this.progress[index] = Math.max(0, this.progress[index] - this.generarRandom(5, 51));

        if (this.progress[index] === 0) {
          this.mensajeGanador = `${this.selectedPokemon[1 - index].name} gana!`; 
        }
      }
      this.turno1 = !this.turno1;
    }
  }
}
