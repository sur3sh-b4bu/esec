import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { AdminAccessControl } from './admin-access-control/admin-access-control.component';
import { AdminAgent } from './admin-agent/admin-agent.component';
import { AdminAgentInstall } from './admin-agent-install/admin-agent-install';
import { AdminCloud } from './admin-cloud/admin-cloud';
import { AdminDataProcess } from './admin-data-process/admin-data-process';
import { AdminDepartmentSummary1 } from './admin-department-summary-1/admin-department-summary-1';
import { AdminEsecPreferences } from './admin-esec-preferences/admin-esec-preferences';
import { AdminGdpr } from './admin-gdpr/admin-gdpr';
import { AdminHoliday } from './admin-holiday/admin-holiday';
import { AdminLicense } from './admin-license/admin-license';
import { AdminLicenseCost } from './admin-license-cost/admin-license-cost';
import { AdminMultiSite } from './admin-multi-site/admin-multi-site';
import { AdminSoftware } from './admin-software/admin-software';
import { AdminSoftwareCompliance } from './admin-software-compliance/admin-software-compliance';
import { AdminSoftwareInventory } from './admin-software-inventory/admin-software-inventory';
import { AdminSoftwareRegister } from './admin-software-register/admin-software-register';
import { AdminSoftwareRegister1 } from './admin-software-register-1/admin-software-register-1';
import { AdminTeamcenter } from './admin-teamcenter/admin-teamcenter';
import { AdminUser } from './admin-user/admin-user';

@Component({
  selector: 'app-admin',
  imports: [
    AdminAccessControl,
    AdminAgent,
    AdminAgentInstall,
    AdminCloud,
    AdminDataProcess,
    AdminDepartmentSummary1,
    AdminEsecPreferences,
    AdminGdpr,
    AdminHoliday,
    AdminLicense,
    AdminLicenseCost,
    AdminMultiSite,
    AdminSoftware,
    AdminSoftwareCompliance,
    AdminSoftwareInventory,
    AdminSoftwareRegister,
    AdminSoftwareRegister1,
    AdminTeamcenter,
    AdminUser
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
