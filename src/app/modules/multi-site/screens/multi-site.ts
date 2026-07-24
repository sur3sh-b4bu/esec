import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { MultiSiteAgentDashboard } from './multi-site-agent-dashboard/multi-site-agent-dashboard';
import { MultiSiteAgentLicenseHarvest } from './multi-site-agent-license-harvest/multi-site-agent-license-harvest';
import { MultiSiteAgentProcessType1 } from './multi-site-agent-process-type-1/multi-site-agent-process-type-1';
import { MultiSiteAgentUser } from './multi-site-agent-user/multi-site-agent-user';
import { MultiSiteAgentUserProcessComputer } from './multi-site-agent-user-process-computer/multi-site-agent-user-process-computer';
import { MultiSiteDashboard } from './multi-site-dashboard/multi-site-dashboard';
import { MultiSiteLicenseExpiry } from './multi-site-license-expiry/multi-site-license-expiry';
import { MultiSiteLicenseOrganization } from './multi-site-license-organization/multi-site-license-organization';
import { MultiSiteLicenseUsage } from './multi-site-license-usage/multi-site-license-usage';
import { MultiSiteStatus } from './multi-site-status/multi-site-status';

@Component({
  selector: 'app-multi-site',
  imports: [
    MultiSiteAgentDashboard,
    MultiSiteAgentLicenseHarvest,
    MultiSiteAgentProcessType1,
    MultiSiteAgentUser,
    MultiSiteAgentUserProcessComputer,
    MultiSiteDashboard,
    MultiSiteLicenseExpiry,
    MultiSiteLicenseOrganization,
    MultiSiteLicenseUsage,
    MultiSiteStatus
  ],
  templateUrl: './multi-site.html',
  styleUrl: './multi-site.css',
})
export class MultiSite {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
