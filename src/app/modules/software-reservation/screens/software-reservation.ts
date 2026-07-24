import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { SoftwareReservationApprover } from './software-reservation-approver/software-reservation-approver';
import { SoftwareReservationAssignApprover } from './software-reservation-assign-approver/software-reservation-assign-approver';
import { SoftwareReservationCreateGroup } from './software-reservation-create-group/software-reservation-create-group';
import { SoftwareReservationMyRequest } from './software-reservation-my-request/software-reservation-my-request';

@Component({
  selector: 'app-software-reservation',
  imports: [
    SoftwareReservationApprover,
    SoftwareReservationAssignApprover,
    SoftwareReservationCreateGroup,
    SoftwareReservationMyRequest
  ],
  templateUrl: './software-reservation.html',
  styleUrl: './software-reservation.css',
})
export class SoftwareReservation {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
