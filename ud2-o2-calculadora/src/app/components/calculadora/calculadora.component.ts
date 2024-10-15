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
  operacion = '';
  resultado = 0;
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
    this.operacion = '-';
  }
  sumar() {
    this.sumarpulsado = true;
    this.operacion = '+';
  }

  mostrarResultado() {
    if (this.sumarpulsado) {
      this.resultado = (this.num1 + this.num2);
      this.sumarpulsado = false;
    } else if (this.restarpulsado) {
      this.resultado = (this.num1 - this.num2);
      this.restarpulsado = false;
    }


  }

  limpiar() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }
}


