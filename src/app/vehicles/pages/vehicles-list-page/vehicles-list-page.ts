import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleDetailModalComponent } from '../../components/vehicle-detail-modal/vehicle-detail-modal';
import { VehicleItemComponent } from '../../components/vehicle-item/vehicle-item';

@Component({
  imports: [AsyncPipe, VehicleItemComponent],
  selector: 'app-vehicles-list-page',
  templateUrl: './vehicles-list-page.html',
})
export class VehiclesListPage {
  private readonly vehicleService = inject(VehicleService);
  private readonly modalService = inject(NgbModal);
  readonly vehicles$ = this.vehicleService.getVehicles();

  showVehicle(id: string): void {
    const modal = this.modalService.open(VehicleDetailModalComponent, { size: 'lg', centered: true });
    modal.componentInstance.vehicleId = id;
  }
}
