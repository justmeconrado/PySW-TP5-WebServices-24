import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-punto-c',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto-c.component.html',
  styleUrl: './punto-c.component.css',
})
export class PuntoCComponent {
  id: string = '';
  marcas: Array<any> = [];
  modelos: Array<any> = [];
  marcaSeleccionada: any;

  constructor(private carService: CarService) {

  }

  obtenerMarcas(): void {
    this.carService.getMarcas().subscribe(
      (data: any) => {
        console.log(data);
        this.marcas = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  obtenerModelosPorMarca(marca: any): void {
    this.marcaSeleccionada = marca;
    this.carService.getModelos(marca.id).subscribe(
      (data: any) => {
        this.modelos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
