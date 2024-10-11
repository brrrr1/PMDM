import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
showInfoDialog() {
  alert('No hay más info para ti ${this.nombre}');
throw new Error('Method not implemented.');
}

nombre = '';
apellido = '';
edad = 0;
lifetime = "young";



ngOnInit(): void {
this.nombre = 'Bruno';
this.apellido = 'Delgado';
this.edad = 19;



}

calcBirthYear(){
  return 2024 - this.edad;
}


}

