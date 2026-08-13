import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationDenialContext } from './license-organization-denial.context';
import { LicenseOrganizationDenialDataSource } from './license-organization-denial.ds';

@Component({
  selector: 'app-license-organization-denial',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationDenialContext, LicenseOrganizationDenialDataSource],
  templateUrl: './license-organization-denial.component.html',
  styleUrl: './license-organization-denial.component.css'
})
export class LicenseOrganizationDenial {
  context = inject(LicenseOrganizationDenialContext);
  readonly tab = input<LayoutTab>();
}
