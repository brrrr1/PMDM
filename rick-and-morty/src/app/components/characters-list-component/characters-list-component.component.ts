import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterResponse, CharactersList} from '../../modules/character.interface';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit {

  constructor(private character : CharacterService) { }


  listadoPersonajes : CharactersList [] = []


  ngOnInit(): void {
   
    this.character.getCharacters().subscribe((data : CharacterResponse) => {
      this.listadoPersonajes = data.results

    });
  }

}
