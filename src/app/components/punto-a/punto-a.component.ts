import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-punto-a',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css'],
})
export class PuntoAComponent implements OnInit {
  texto = '';
  source = 'es';
  target = 'en';
  textoTraducido = '';
  languages: any[] = [];
  cargandoLenguajes = true;
  cargandoTraduccion = false;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.obtenerLenguajes();
  }

  obtenerLenguajes() {
    this.cargandoLenguajes = true;
    this.translateService
      .getLanguages()
      .pipe(finalize(() => (this.cargandoLenguajes = false))) // Finaliza la carga al terminar la petición
      .subscribe({
        next: (data: any) => (this.languages = data.data.languages),
        error: (error: any) =>
          console.error('Error fetching languages:', error),
      });
  }

  traducir() {
    this.cargandoTraduccion = true;
    this.translateService
      .translateText(this.source, this.target, this.texto)
      .pipe(finalize(() => (this.cargandoTraduccion = false)))
      .subscribe({
        next: (data: any) =>
          (this.textoTraducido = data.data.translations[0].translatedText),
        error: (error: any) => console.error('Error translating text:', error),
      });
  }
}
