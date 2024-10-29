import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {



  // TURN possible values: 1, 2
  pokemonTurn = 1;
  pokemonPlayer1Id = 501;
  pokemonPlayer2Id = 980;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  terminado1 = false;
  terminado2 = false;

  

  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      // Apply damage to Pokemon 2
      this.lifePokemon2 -= damage;
      if(this.lifePokemon2 <= 0) {
        this.terminado1 = true;
      }else {
      this.pokemonTurn = 2;
      }

    } else {
      // Apply damage to Pokemon 1
      this.lifePokemon1 -= damage;
      if(this.lifePokemon1 <= 0) {
        this.terminado2 = true;
      } else{
        this.pokemonTurn = 1;
      }
    }
  }

  healPokemon(cura: number) {
    if (this.pokemonTurn === 1) {
      this.lifePokemon1 += cura;
      this.pokemonTurn = 2;
    } else {
      this.lifePokemon2 += cura;
      this.pokemonTurn = 1;
    }

  }

  updatePokemonIds() {
    console.log(`Player 1 ID: ${this.pokemonPlayer1Id}, Player 2 ID: ${this.pokemonPlayer2Id}`);
    this.pokemonPlayer1Id = 5;
  }

  resetBattle() {
    this.pokemonTurn = 1;
    this.pokemonPlayer1Id = 501;
    this.pokemonPlayer2Id = 980;
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.terminado1 = false;
    this.terminado2 = false;
}
}
