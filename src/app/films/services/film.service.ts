import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiListResponse } from '../../shared/api.types';
import { Film } from '../models/film.model';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://swapi.dev/api/films/';

  getFilms(): Observable<SwapiListResponse<Film>> {
    return this.http.get<SwapiListResponse<Film>>(this.endpoint);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.endpoint}${encodeURIComponent(id)}/`);
  }
}
