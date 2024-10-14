import { Component } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrl: './coche.component.css'
})
export class CocheComponent {

  nombre = 'Tesla Model S';
  automatico = true;
  manual = true;
  precioDia = 125;
  imagen = '.src/img/coche_1.png';
}
