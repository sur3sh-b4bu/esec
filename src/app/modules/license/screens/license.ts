import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { LicenseAndAgentCombined } from './license-and-agent-combined/license-and-agent-combined';
import { LicenseBorrow } from './license-borrow/license-borrow';
import { LicenseComputer } from './license-computer/license-computer';
import { LicenseDebugData } from './license-debug-data/license-debug-data';
import { LicenseDenial } from './license-denial/license-denial';
import { LicenseDepartment } from './license-department/license-department';
import { LicenseDivision } from './license-division/license-division';
import { LicenseGroup } from './license-group/license-group';
import { LicenseGroupMember } from './license-group-member/license-group-member';
import { LicenseMyFeature } from './license-my-feature/license-my-feature';
import { LicenseOrganization } from './license-organization/license-organization.component'
import { LicenseOrganizationByWeek } from './license-organization-by-week/license-organization-by-week.component';
import { LicenseOrganizationByYearMonth } from './license-organization-by-year-month/license-organization-by-year-month';
import { LicenseReportType1 } from './license-report-type-1/license-report-type-1';
import { LicenseUsage } from './license-usage/license-usage';
import { LicenseUser } from './license-user/license-user';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FilterBar } from '@layout/filter-bar/filter-bar';
import { SubFilterBar } from '@layout/sub-filter-bar/sub-filter-bar';

@Component({
  selector: 'app-license',
  imports: [
    LicenseAndAgentCombined,
    LicenseBorrow,
    LicenseComputer,
    LicenseDebugData,
    LicenseDenial,
    LicenseDepartment,
    LicenseDivision,
    LicenseGroup,
    LicenseGroupMember,
    LicenseMyFeature,
    LicenseOrganization,
    LicenseOrganizationByWeek,
    LicenseOrganizationByYearMonth,
    LicenseReportType1,
    LicenseUsage,
    LicenseUser,
    FilterBar,
    SubFilterBar
  ],
  templateUrl: './license.html',
  styleUrl: './license.css',
})

export class License {
  private sideBarService = inject(SideBarService);
  filterService = inject(FilterServiceGlobal);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}

