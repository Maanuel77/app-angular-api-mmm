import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { FilmItemComponent } from '../../components/film-item/film-item';

@Component({
  imports: [AsyncPipe, FilmItemComponent],
  selector: 'app-film-list-page',
  templateUrl: './film-list-page.html',
})
export class FilmListPage {
  private readonly filmService = inject(FilmService);
  readonly films$ = this.filmService.getFilms();
}
