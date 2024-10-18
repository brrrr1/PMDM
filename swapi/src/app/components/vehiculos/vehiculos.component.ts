import { Component, OnInit } from '@angular/core';
import { vehiculos } from '../../interfaces/vehiculos.interfaces';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent implements OnInit {

listadoVehiculos: vehiculos[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe((respuesta: vehiculos[]) => {
      this.listadoVehiculos = respuesta;
    });
  }

}
