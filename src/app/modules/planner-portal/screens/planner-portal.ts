import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { PlannerPortalCreateDepartment } from './planner-portal-create-department/planner-portal-create-department';
import { PlannerPortalCreateEmployees } from './planner-portal-create-employees/planner-portal-create-employees';
import { PlannerPortalCreateHours } from './planner-portal-create-hours/planner-portal-create-hours';
import { PlannerPortalCreateProjects } from './planner-portal-create-projects/planner-portal-create-projects';
import { PlannerPortalDepartmentAccess } from './planner-portal-department-access/planner-portal-department-access';
import { PlannerPortalDepartmentProjectAccess } from './planner-portal-department-project-access/planner-portal-department-project-access';
import { PlannerPortalEstimationSheet } from './planner-portal-estimation-sheet/planner-portal-estimation-sheet';
import { PlannerPortalLicenseRequest } from './planner-portal-license-request/planner-portal-license-request';
import { PlannerPortalLicenseRequestAccess } from './planner-portal-license-request-access/planner-portal-license-request-access';
import { PlannerPortalLicenseRequestReport } from './planner-portal-license-request-report/planner-portal-license-request-report';
import { PlannerPortalLockSoftware } from './planner-portal-lock-software/planner-portal-lock-software';
import { PlannerPortalMapSoftware } from './planner-portal-map-software/planner-portal-map-software';
import { PlannerPortalPlannerAccess } from './planner-portal-planner-access/planner-portal-planner-access';
import { PlannerPortalProjectAccess } from './planner-portal-project-access/planner-portal-project-access';
import { PlannerPortalRecharge } from './planner-portal-recharge/planner-portal-recharge';
import { PlannerPortalSoftwareStatus } from './planner-portal-software-status/planner-portal-software-status';
import { PlannerPortalSoftwareUsage } from './planner-portal-software-usage/planner-portal-software-usage';
import { PlannerPortalTimeSheetReport } from './planner-portal-time-sheet-report/planner-portal-time-sheet-report';
import { PlannerPortalUploadTimeSheet } from './planner-portal-upload-time-sheet/planner-portal-upload-time-sheet';
import { PlannerPortalWfl } from './planner-portal-wfl/planner-portal-wfl';

@Component({
  selector: 'app-planner-portal',
  imports: [
    PlannerPortalCreateDepartment,
    PlannerPortalCreateEmployees,
    PlannerPortalCreateHours,
    PlannerPortalCreateProjects,
    PlannerPortalDepartmentAccess,
    PlannerPortalDepartmentProjectAccess,
    PlannerPortalEstimationSheet,
    PlannerPortalLicenseRequest,
    PlannerPortalLicenseRequestAccess,
    PlannerPortalLicenseRequestReport,
    PlannerPortalLockSoftware,
    PlannerPortalMapSoftware,
    PlannerPortalPlannerAccess,
    PlannerPortalProjectAccess,
    PlannerPortalRecharge,
    PlannerPortalSoftwareStatus,
    PlannerPortalSoftwareUsage,
    PlannerPortalTimeSheetReport,
    PlannerPortalUploadTimeSheet,
    PlannerPortalWfl
  ],
  templateUrl: './planner-portal.html',
  styleUrl: './planner-portal.css',
})
export class PlannerPortal {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
