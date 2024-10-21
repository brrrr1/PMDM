import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculos, VehiculosResponse } from '../interfaces/vehiculos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<VehiculosResponse> {
    return this.http.get('https://swapi.dev/api/vehicles/') as Observable<VehiculosResponse>;
  }
}
