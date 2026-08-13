import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageSummary } from './subfilter/license-organization-usage-summary/license-organization-usage-summary.component';
import { LicenseOrganizationUsageDaywiseSummary } from './subfilter/license-organization-usage-daywise-summary/license-organization-usage-daywise-summary.component';
import { LicenseOrganizationUsageDaywiseSession } from './subfilter/license-organization-usage-daywise-session/license-organization-usage-daywise-session.component';
import { LicenseOrganizationUsageMatrix } from './subfilter/license-organization-usage-matrix/license-organization-usage-matrix.component';
import { LicenseOrganizationUsageContext } from './license-organization-usage.context';
import { LicenseOrganizationUsageDataSource } from './license-organization-usage.ds';

export type UsageSubTab = 'Summary' | 'Daywise Summary' | 'Daywise Session' | 'Matrix';

@Component({
  selector: 'app-license-organization-usage',
  standalone: true,
  imports: [
    CommonModule,
    LicenseOrganizationUsageSummary,
    LicenseOrganizationUsageDaywiseSummary,
    LicenseOrganizationUsageDaywiseSession,
    LicenseOrganizationUsageMatrix
  ],
  providers: [LicenseOrganizationUsageContext, LicenseOrganizationUsageDataSource],
  templateUrl: './license-organization-usage.component.html',
  styleUrl: './license-organization-usage.component.css'
})
export class LicenseOrganizationUsage {
  context = inject(LicenseOrganizationUsageContext);
  readonly tab = input<LayoutTab>();

  readonly activeSubTab = signal<UsageSubTab>('Summary');
  readonly subTabs: UsageSubTab[] = ['Summary', 'Daywise Summary', 'Daywise Session', 'Matrix'];

  selectTab(tab: UsageSubTab): void {
    this.activeSubTab.set(tab);
  }
}
