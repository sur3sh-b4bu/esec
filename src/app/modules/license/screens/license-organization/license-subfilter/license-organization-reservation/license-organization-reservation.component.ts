import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationReservationContext } from './license-organization-reservation.context';
import { LicenseOrganizationReservationDataSource } from './license-organization-reservation.ds';

@Component({
  selector: 'app-license-organization-reservation',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationReservationContext, LicenseOrganizationReservationDataSource],
  templateUrl: './license-organization-reservation.component.html',
  styleUrl: './license-organization-reservation.component.css'
})
export class LicenseOrganizationReservation {
  context = inject(LicenseOrganizationReservationContext);
  readonly tab = input<LayoutTab>();
}
