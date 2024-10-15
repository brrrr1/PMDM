import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {


  sumarpulsado = false;
  restarpulsado = false;
  pulsado = false;
  num1 = 0;
  num2 = 0;

  guardar(arg0: number) {
    if (!this.pulsado) {
      this.num1 = arg0;
      this.pulsado = true;
    } else {
      this.num2 = arg0;
      this.pulsado = false;
    }
  }

  restar() {
    this.restarpulsado = true;
  }
  sumar() {
    this.sumarpulsado = true;

  }

  mostrarResultado() {
    if (this.sumarpulsado) {
      alert(this.num1 + this.num2);
      this.sumarpulsado = false;
    } else if (this.restarpulsado) {  
      alert(this.num1 - this.num2);
      this.restarpulsado = false;
    }
  }



}


