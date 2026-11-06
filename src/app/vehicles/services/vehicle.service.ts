import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiListResponse } from '../../shared/api.types';
import { Vehicle } from '../models/vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://swapi.dev/api/vehicles/';

  getVehicles(): Observable<SwapiListResponse<Vehicle>> {
    return this.http.get<SwapiListResponse<Vehicle>>(this.endpoint);
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.endpoint}${encodeURIComponent(id)}/`);
  }
}
