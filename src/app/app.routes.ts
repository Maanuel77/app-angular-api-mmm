import { Routes } from '@angular/router';
import { VehiclesListPage } from './vehicles/pages/vehicles-list-page/vehicles-list-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vehicles' },
  { path: 'vehicles', component: VehiclesListPage, title: 'Vehicles | Star Wars' },
  { path: '**', redirectTo: 'vehicles' },
];
