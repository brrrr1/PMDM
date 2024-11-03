import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {

  private calcularLetra(dni: number): string {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letters[dni % 23];
  }

  transform(value: number): string {
    const letter = this.calcularLetra(value);
    return `${value}${letter}`;
  }

}
