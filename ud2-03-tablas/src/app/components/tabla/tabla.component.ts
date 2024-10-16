import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Student {

  numeroAlumno: number;
  nombre: string;
  apellidos: string;
  nif: string;
  edad: number;
  cursoMatriculado: string;
}







const ELEMENT_DATA: Student[] = [
  { numeroAlumno: 1, nombre: 'Juan', apellidos: 'Pérez', nif: '12345678A', edad: 20, cursoMatriculado: 'Matemáticas' },
  { numeroAlumno: 2, nombre: 'Ana', apellidos: 'García', nif: '23456789B', edad: 22, cursoMatriculado: 'Física' },
  { numeroAlumno: 3, nombre: 'Luis', apellidos: 'Martínez', nif: '34567890C', edad: 21, cursoMatriculado: 'Química' },
  { numeroAlumno: 4, nombre: 'María', apellidos: 'López', nif: '45678901D', edad: 23, cursoMatriculado: 'Biología' },
  { numeroAlumno: 5, nombre: 'Carlos', apellidos: 'González', nif: '56789012E', edad: 24, cursoMatriculado: 'Historia' },
  { numeroAlumno: 6, nombre: 'Elena', apellidos: 'Rodríguez', nif: '67890123F', edad: 25, cursoMatriculado: 'Geografía' },
  { numeroAlumno: 7, nombre: 'Jorge', apellidos: 'Fernández', nif: '78901234G', edad: 26, cursoMatriculado: 'Filosofía' },
  { numeroAlumno: 8, nombre: 'Laura', apellidos: 'Sánchez', nif: '89012345H', edad: 27, cursoMatriculado: 'Literatura' },
  { numeroAlumno: 9, nombre: 'Pedro', apellidos: 'Ramírez', nif: '90123456I', edad: 28, cursoMatriculado: 'Arte' },
  { numeroAlumno: 10, nombre: 'Marta', apellidos: 'Torres', nif: '01234567J', edad: 29, cursoMatriculado: 'Música' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  standalone: true,
  imports: [MatTableModule],
})


export class TableComponent {
  displayedColumns: string[] = ['numeroAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'cursoMatriculado'];
  dataSource = ELEMENT_DATA;
}



