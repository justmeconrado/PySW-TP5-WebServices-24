import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private apiUrl = 'https://livescore6.p.rapidapi.com/news/';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '2058a676e6msh46738dc717df7aep1c3bf3jsn35d47f4ca087',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl + 'v2/list', { headers: this.headers });
  }

  getNewsById(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.apiUrl + 'v2/detail', {
      headers: this.headers,
      params: params,
    });
  }
}
