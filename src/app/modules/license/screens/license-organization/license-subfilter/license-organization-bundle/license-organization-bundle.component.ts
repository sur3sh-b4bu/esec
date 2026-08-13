import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationBundleContext } from './license-organization-bundle.context';
import { LicenseOrganizationBundleDataSource } from './license-organization-bundle.ds';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';

@Component({
  selector: 'app-license-organization-bundle',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationBundleContext, LicenseOrganizationBundleDataSource],
  templateUrl: './license-organization-bundle.component.html',
  styleUrl: './license-organization-bundle.component.css'
})
export class LicenseOrganizationBundle {
  context = inject(LicenseOrganizationBundleContext);
  readonly tab = input<LayoutTab>();
}
