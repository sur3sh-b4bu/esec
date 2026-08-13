import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationLongDurationContext } from './license-organization-long-duration.context';
import { LicenseOrganizationLongDurationDataSource } from './license-organization-long-duration.ds';

@Component({
  selector: 'app-license-organization-long-duration',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationLongDurationContext, LicenseOrganizationLongDurationDataSource],
  templateUrl: './license-organization-long-duration.component.html',
  styleUrl: './license-organization-long-duration.component.css'
})
export class LicenseOrganizationLongDuration {
  context = inject(LicenseOrganizationLongDurationContext);
  readonly tab = input<LayoutTab>();
}
