import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageSummaryContext } from './license-organization-usage-summary.context';
import { LicenseOrganizationUsageSummaryDataSource } from './license-organization-usage-summary.ds';

@Component({
  selector: 'app-license-organization-usage-summary',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationUsageSummaryContext, LicenseOrganizationUsageSummaryDataSource],
  templateUrl: './license-organization-usage-summary.component.html',
  styleUrl: './license-organization-usage-summary.component.css'
})
export class LicenseOrganizationUsageSummary {
  context = inject(LicenseOrganizationUsageSummaryContext);
  ds = inject(LicenseOrganizationUsageSummaryDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) this.ds.selectedServer.set(currentTab.server);
      if (currentTab.feature) this.ds.selectedFeature.set(currentTab.feature);
    }
  }
}
