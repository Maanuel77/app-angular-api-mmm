import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { FilmService } from '../../services/film.service';

@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'app-film-item-page',
  styleUrl: './film-item-page.scss',
  templateUrl: './film-item-page.html',
})
export class FilmItemPage {
  private readonly route = inject(ActivatedRoute);
  private readonly filmService = inject(FilmService);
  readonly film$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      return id ? this.filmService.getFilm(id) : EMPTY;
    }),
  );
}
