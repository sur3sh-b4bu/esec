import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationMonthContext } from './license-organization-month.context';
import { LicenseOrganizationMonthDataSource } from './license-organization-month.ds';

@Component({
  selector: 'app-license-organization-month',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationMonthContext, LicenseOrganizationMonthDataSource],
  templateUrl: './license-organization-month.component.html',
  styleUrl: './license-organization-month.component.css'
})
export class LicenseOrganizationMonth {
  context = inject(LicenseOrganizationMonthContext);
  datasource = inject(LicenseOrganizationMonthDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit() {
    const currentTab = this.tab();
    if (currentTab?.server) {
      this.datasource.selectedServer.set(currentTab.server);
    }
    if (currentTab?.feature) {
      this.datasource.selectedFeature.set(currentTab.feature);
    }
  }
}
