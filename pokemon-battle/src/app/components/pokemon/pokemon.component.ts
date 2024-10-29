import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon-response.interface';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {



  options: AnimationOptions = {
    path: '/assets/animation_explosion.json',
  };

  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  pokemonGanador: PokemonResponse | undefined;
  @Input() life: number = 100;
  @Output() onAttackDone = new EventEmitter<number>();
  @Output() onHealDone = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;
  showAnimation: boolean = false;
  @Input() terminado: boolean = false;
  batallaTerminada = false;
  curaCount = 0;
  curasQuedan = 3;



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService
      .getPokemon(this.pokemonId!)
      .subscribe((pokemonResponse) => {
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

    //if (this.batallaTerminada && this.life > 0) {
      //alert(`¡${this.pokemon?.name} es el ganador!`);
    //}
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

  curar() {
    if (this.curaCount < 3 && this.life < 100) {
      //this.terminado = false;
      //this.batallaTerminada = false;
      this.curasQuedan--;
      this.curaCount++;
      var curaAmount = Math.floor(Math.random() * ((100 - this.life) - 10) + 10);
      this.onHealDone.emit(curaAmount);

    }

    if(this.life > 100){
      this.life = 100;
    }



  }





}
