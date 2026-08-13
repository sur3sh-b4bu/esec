import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageDaywiseSessionContext } from './license-organization-usage-daywise-session.context';
import { LicenseOrganizationUsageDaywiseSessionDataSource } from './license-organization-usage-daywise-session.ds';

@Component({
  selector: 'app-license-organization-usage-daywise-session',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationUsageDaywiseSessionContext, LicenseOrganizationUsageDaywiseSessionDataSource],
  templateUrl: './license-organization-usage-daywise-session.component.html',
  styleUrl: './license-organization-usage-daywise-session.component.css'
})
export class LicenseOrganizationUsageDaywiseSession {
  context = inject(LicenseOrganizationUsageDaywiseSessionContext);
  ds = inject(LicenseOrganizationUsageDaywiseSessionDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) this.ds.selectedServer.set(currentTab.server);
      if (currentTab.feature) this.ds.selectedFeature.set(currentTab.feature);
    }
  }
}
