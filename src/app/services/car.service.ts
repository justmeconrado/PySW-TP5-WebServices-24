import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

interface Marca {
  id: string;
  name: string;
}

interface Modelo {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://car-specs.p.rapidapi.com/v2/cars';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '2058a676e6msh46738dc717df7aep1c3bf3jsn35d47f4ca087',
    'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<Marca[]> {
    return this.http
      .get<Marca[]>(`${this.apiUrl}/makes`, { headers: this.headers })
      .pipe(
        catchError((error) => {
          console.error('Error fetching brands:', error);
          return throwError(
            'Ocurrió un error al obtener las marcas. Por favor, inténtalo de nuevo más tarde.'
          );
        })
      );
  }

  getModelos(id: string): Observable<Modelo[]> {
    return this.http
      .get<Modelo[]>(`${this.apiUrl}/makes/${id}/models`, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching models:', error);
          return throwError(
            'Ocurrió un error al obtener los modelos. Por favor, inténtalo de nuevo más tarde.'
          );
        })
      );
  }
}
