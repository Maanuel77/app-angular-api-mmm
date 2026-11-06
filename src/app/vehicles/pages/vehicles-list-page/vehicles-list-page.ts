import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleItemComponent } from '../../components/vehicle-item/vehicle-item';

@Component({
  imports: [AsyncPipe, VehicleItemComponent],
  selector: 'app-vehicles-list-page',
  templateUrl: './vehicles-list-page.html',
})
export class VehiclesListPage {
  private readonly vehicleService = inject(VehicleService);
  readonly vehicles$ = this.vehicleService.getVehicles();
}
