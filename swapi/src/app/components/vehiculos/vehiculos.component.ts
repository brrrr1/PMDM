import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';
import { Vehiculos } from '../../models/vehiculos.interfaces';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent implements OnInit {

listadoVehiculos: Vehiculos[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(respuesta => {
      this.listadoVehiculos = respuesta.results;
    });
  }

  generateVehiclePhoto(url: string): string {
    const id = url.split('/').filter(segment => segment).pop();
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }

}
