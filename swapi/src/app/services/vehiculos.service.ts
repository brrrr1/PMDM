import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vehiculos } from '../interfaces/vehiculos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<vehiculos[]> {
    return this.http.get<vehiculos[]>('http://localhost:3000/vehiculos');
  }
}
