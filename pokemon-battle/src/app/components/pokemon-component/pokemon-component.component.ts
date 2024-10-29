import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon.interface';


@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent implements OnInit {
  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  @Input() life: number = 100;
  @Output() onAttackDone = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;
  showAnimation: boolean | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService
      .getPokemon(this.pokemonId!)
      .subscribe(pokemonResponse => {
        this.pokemon = pokemonResponse;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['life']) {
      if (changes['life'].firstChange == false) {
        this.showAnimation = true;
        setTimeout(() => {
          this.showAnimation = false;
        }, 500);
      }
    }
  }

  getProgressBarColor(): string {
    if (this.life >= 70) {
      return 'success';
    } else if (this.life >= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {
    var damage = Math.floor(Math.random() * (30 - 10) + 10);
    this.onAttackDone.emit(damage);
  }
}