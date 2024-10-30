import { Component, OnInit } from '@angular/core';
import { CustomEurPipe } from '../../pipes/custom-eur.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  titulo = 'Bienvenido A LA página DE inicio';
  precio = 125.75;
  createdAt = new Date(2021, 4, 21);
  porcentajeVida=0.75;
  customEurValue = '15';

  constructor(private customEur:CustomEurPipe) { }

  ngOnInit(): void {
    this.customEurValue = this.customEur.transform(this.customEurValue);
  }
}
