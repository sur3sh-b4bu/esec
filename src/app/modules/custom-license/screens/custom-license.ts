import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { CustomLicenseDepartmentHoursUsed } from './custom-license-department-hours-used/custom-license-department-hours-used';
import { CustomLicenseDepartmentLicenseHoursUsed } from './custom-license-department-license-hours-used/custom-license-department-license-hours-used';
import { CustomLicenseDepartmentTeamcenterHoursUsed } from './custom-license-department-teamcenter-hours-used/custom-license-department-teamcenter-hours-used';
import { CustomLicenseDivisionHoursUsed } from './custom-license-division-hours-used/custom-license-division-hours-used';
import { CustomLicenseDivisionLicenseHoursUsed } from './custom-license-division-license-hours-used/custom-license-division-license-hours-used';
import { CustomLicenseDivisionTeamcenterHoursUsed } from './custom-license-division-teamcenter-hours-used/custom-license-division-teamcenter-hours-used';
import { CustomLicenseSoftware } from './custom-license-software/custom-license-software';

@Component({
  selector: 'app-custom-license',
  imports: [
    CustomLicenseDepartmentHoursUsed,
    CustomLicenseDepartmentLicenseHoursUsed,
    CustomLicenseDepartmentTeamcenterHoursUsed,
    CustomLicenseDivisionHoursUsed,
    CustomLicenseDivisionLicenseHoursUsed,
    CustomLicenseDivisionTeamcenterHoursUsed,
    CustomLicenseSoftware
  ],
  templateUrl: './custom-license.html',
  styleUrl: './custom-license.css',
})
export class CustomLicense {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
