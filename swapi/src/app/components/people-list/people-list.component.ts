import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  listadoPersonas: People[] = [];

  constructor(private personasService: PeopleService) { }

  ngOnInit(): void {
    this.personasService.getPeople().subscribe(respuesta => {
      this.listadoPersonas = respuesta.results;
    });
  }

  generatePeoplePhoto(url: string): string {
    const id = url.split('/').filter(segment => segment).pop();
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }
}
