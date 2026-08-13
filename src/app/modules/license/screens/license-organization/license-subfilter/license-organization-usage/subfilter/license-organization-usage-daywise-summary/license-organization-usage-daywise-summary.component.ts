import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageDaywiseSummaryContext } from './license-organization-usage-daywise-summary.context';
import { LicenseOrganizationUsageDaywiseSummaryDataSource } from './license-organization-usage-daywise-summary.ds';

@Component({
  selector: 'app-license-organization-usage-daywise-summary',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationUsageDaywiseSummaryContext, LicenseOrganizationUsageDaywiseSummaryDataSource],
  templateUrl: './license-organization-usage-daywise-summary.component.html',
  styleUrl: './license-organization-usage-daywise-summary.component.css'
})
export class LicenseOrganizationUsageDaywiseSummary {
  context = inject(LicenseOrganizationUsageDaywiseSummaryContext);
  ds = inject(LicenseOrganizationUsageDaywiseSummaryDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit(): void {

    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) this.ds.selectedServer.set(currentTab.server);
      if (currentTab.feature) this.ds.selectedFeature.set(currentTab.feature);
    }
  }
}
