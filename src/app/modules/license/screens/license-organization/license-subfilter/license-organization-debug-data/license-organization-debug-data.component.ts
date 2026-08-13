import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationDebugDataContext } from './license-organization-debug-data.context';
import { LicenseOrganizationDebugDataDataSource } from './license-organization-debug-data.ds';

@Component({
  selector: 'app-license-organization-debug-data',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationDebugDataContext, LicenseOrganizationDebugDataDataSource],
  templateUrl: './license-organization-debug-data.component.html',
  styleUrl: './license-organization-debug-data.component.css'
})
export class LicenseOrganizationDebugData {
  context = inject(LicenseOrganizationDebugDataContext);
  readonly tab = input<LayoutTab>();
}
