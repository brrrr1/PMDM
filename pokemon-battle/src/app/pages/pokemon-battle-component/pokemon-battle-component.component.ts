import { Component } from '@angular/core';


@Component({
  selector: 'app-pokemon-battle-component',
  templateUrl: './pokemon-battle-component.component.html',
  styleUrls: ['./pokemon-battle-component.component.css']
})
export class PokemonBattleComponentComponent{

  lifePokemon1= 100;
  lifePokemon2= 100;

  pokemon1id = 1;
  pokemon2id = 2;
  pokemonTurn = 1;
  applyDamage(damage: number){
    if(this.pokemonTurn === 1){
      //Apply damage to pokemon 2
      this.lifePokemon2 -= damage;
      this.pokemonTurn = 2;
    
  }else{
    //Apply damage to pokemon 1
    this.lifePokemon1 -= damage;
    this.pokemonTurn = 1;
  }

}

}
