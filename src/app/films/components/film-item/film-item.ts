import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getResourceId } from '../../../shared/api.types';
import { Film } from '../../models/film.model';

@Component({
  imports: [RouterLink],
  selector: 'app-film-item',
  templateUrl: './film-item.html',
})
export class FilmItemComponent {
  @Input({ required: true }) film!: Film;

  get filmId(): string {
    return getResourceId(this.film.url);
  }
}
