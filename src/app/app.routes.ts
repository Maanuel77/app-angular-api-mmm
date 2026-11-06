import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles/pages/vehicles-list-page/vehicles-list-page';
import { FilmListPage } from './films/pages/film-list-page/film-list-page';
import { FilmItemPage } from './films/pages/film-item-page/film-item-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vehicles' },
  { path: 'vehicles', component: VehiclesListPage, title: 'Vehicles | Star Wars' },
  { path: 'films', component: FilmListPage, title: 'Films | Star Wars' },
  { path: 'films/:id', component: FilmItemPage, title: 'Film detail | Star Wars' },
  { path: '**', redirectTo: 'vehicles' },
];
