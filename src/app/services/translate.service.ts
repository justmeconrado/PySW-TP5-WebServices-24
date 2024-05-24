import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private apiUrl =
    'https://google-translate1.p.rapidapi.com/language/translate/v2';
  private apiHost = 'google-translate1.p.rapidapi.com'; // Define el host aquí
  private apiKey = '2058a676e6msh46738dc717df7aep1c3bf3jsn35d47f4ca087';
  constructor(private http: HttpClient) {}

  private getHttpOptions(contentType = 'application/json'): {
    headers: HttpHeaders;
  } {
    return {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': this.apiHost,
        'X-RapidAPI-Key': this.apiKey,
        'Content-Type': contentType,
      }),
    };
  }

  getLanguages(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.apiUrl}/languages`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  translateText(source: string, target: string, text: string): Observable<any> {
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);

    return this.http
      .post(
        this.apiUrl,
        body,
        this.getHttpOptions('application/x-www-form-urlencoded')
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido.';

    // Manejar errores específicos del servidor
    if (error.status === 401) {
      errorMessage = 'No autorizado: Verifica tu clave de API.';
    } else if (error.status === 404) {
      errorMessage = 'No encontrado: Verifica la URL de la API.';
    } else if (error.status === 500) {
      errorMessage = 'Error interno del servidor.';
    } else if (error.error && error.error.message) {
      errorMessage = `Error: ${error.error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage)); // Crea un objeto Error para un mejor seguimiento
  }
}
