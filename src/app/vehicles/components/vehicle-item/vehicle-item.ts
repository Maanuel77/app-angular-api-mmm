import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getResourceId } from '../../../shared/api.types';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.html',
})
export class VehicleItemComponent {
  @Input({ required: true }) vehicle!: Vehicle;
  @Output() readonly vehicleSelected = new EventEmitter<string>();

  selectVehicle(): void {
    this.vehicleSelected.emit(getResourceId(this.vehicle.url));
  }
}
