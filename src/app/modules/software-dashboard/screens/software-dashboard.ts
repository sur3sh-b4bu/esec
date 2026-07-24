import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { SoftwareDashboardAgentUsageData } from './software-dashboard-agent-usage-data/software-dashboard-agent-usage-data';
import { SoftwareDashboardConsolidatedSoftwareSummary } from './software-dashboard-consolidated-software-summary/software-dashboard-consolidated-software-summary';
import { SoftwareDashboardOnCloud } from './software-dashboard-on-cloud/software-dashboard-on-cloud';
import { SoftwareDashboardOnPrem } from './software-dashboard-on-prem/software-dashboard-on-prem';

@Component({
  selector: 'app-software-dashboard',
  imports: [
    SoftwareDashboardAgentUsageData,
    SoftwareDashboardConsolidatedSoftwareSummary,
    SoftwareDashboardOnCloud,
    SoftwareDashboardOnPrem
  ],
  templateUrl: './software-dashboard.html',
  styleUrl: './software-dashboard.css',
})
export class SoftwareDashboard {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
