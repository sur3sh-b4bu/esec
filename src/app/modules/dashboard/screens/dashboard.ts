import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { DashboardAgentLinux } from './dashboard-agent-linux/dashboard-agent-linux';
import { DashboardAgentWindows } from './dashboard-agent-windows/dashboard-agent-windows';
import { DashboardConfiguration } from './dashboard-configuration/dashboard-configuration';
import { DashboardConsolidatedSoftwareSummary } from './dashboard-consolidated-software-summary/dashboard-consolidated-software-summary';
import { DashboardDepartment } from './dashboard-department/dashboard-department';
import { DashboardDepartmentSummary1 } from './dashboard-department-summary-1/dashboard-department-summary-1';
import { DashboardDivision } from './dashboard-division/dashboard-division';
import { DashboardOnCloud } from './dashboard-on-cloud/dashboard-on-cloud';
import { DashboardOnPrem } from './dashboard-on-prem/dashboard-on-prem';
import { DashboardProcess } from './dashboard-process/dashboard-process';
import { DashboardProcessType1 } from './dashboard-process-type-1/dashboard-process-type-1';
import { DashboardProcessType2 } from './dashboard-process-type-2/dashboard-process-type-2';
import { DashboardProcessType3 } from './dashboard-process-type-3/dashboard-process-type-3';
import { DashboardSoftwareInventory } from './dashboard-software-inventory/dashboard-software-inventory';
import { DashboardSoftwareSummary } from './dashboard-software-summary/dashboard-software-summary';
import { DashboardSoftwareSummary1 } from './dashboard-software-summary-1/dashboard-software-summary-1';
import { DashboardVendorExpiryUtilization } from './dashboard-vendor-expiry-utilization/dashboard-vendor-expiry-utilization';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardAgentLinux,
    DashboardAgentWindows,
    DashboardConfiguration,
    DashboardConsolidatedSoftwareSummary,
    DashboardDepartment,
    DashboardDepartmentSummary1,
    DashboardDivision,
    DashboardOnCloud,
    DashboardOnPrem,
    DashboardProcess,
    DashboardProcessType1,
    DashboardProcessType2,
    DashboardProcessType3,
    DashboardSoftwareInventory,
    DashboardSoftwareSummary,
    DashboardSoftwareSummary1,
    DashboardVendorExpiryUtilization
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
