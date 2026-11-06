import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplaySubject, switchMap } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-vehicle-detail-modal',
  templateUrl: './vehicle-detail-modal.html',
})
export class VehicleDetailModalComponent {
  readonly activeModal = inject(NgbActiveModal);
  private readonly vehicleService = inject(VehicleService);
  private readonly vehicleIdSubject = new ReplaySubject<string>(1);
  readonly vehicle$ = this.vehicleIdSubject.pipe(
    switchMap((id) => this.vehicleService.getVehicle(id)),
  );

  set vehicleId(id: string) {
    this.vehicleIdSubject.next(id);
  }
}
