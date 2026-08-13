import { Component, input } from '@angular/core';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FilterState } from '@core/state/filter.state';
import { Admin } from '@modules/admin/screens/admin';
import { Dashboard } from '@modules/dashboard/screens/dashboard';
import { Cost } from '@modules/cost/screens/cost';
import { Billing } from '@modules/billing/screens/billing';
import { MyReport } from '@modules/my-report/screens/my-report';
import { License } from '@modules/license/screens/license';
import { Cloud } from '@modules/cloud/screens/cloud';
import { Process } from '@modules/process/screens/process';
import { Asset } from '@modules/asset/screens/asset';
import { Compliance } from '@modules/compliance/screens/compliance';
import { Hpc } from '@modules/hpc/screens/hpc';
import { MultiSite } from '@modules/multi-site/screens/multi-site';
import { SoftwareRegister } from '@modules/software-register/screens/software-register';
import { LicenseManager } from '@modules/license-manager/screens/license-manager';
import { Software } from '@modules/software/screens/software';
import { CustomLicense } from '@modules/custom-license/screens/custom-license';
import { PlannerPortal } from '@modules/planner-portal/screens/planner-portal';
import { SoftwareReservation } from '@modules/software-reservation/screens/software-reservation';
import { Chatbots } from '@modules/chatbot/screens/chatbot';
import { SoftwareDashboard } from '@modules/software-dashboard/screens/software-dashboard';
import { ProjectPortal } from '@modules/project-portal/screens/project-portal';
import { LicenseOrganizationSummary } from '@modules/license/screens/license-organization/license-subfilter/license-organization-summary/license-organization-summary.component';
import { LicenseOrganizationUtilization } from '@modules/license/screens/license-organization/license-subfilter/license-organization-utilization/license-organization-utilization.component';
import { LicenseOrganizationHistory } from '@modules/license/screens/license-organization/license-subfilter/license-organization-history/license-organization-history.component';
import { LicenseOrganizationQos } from '@modules/license/screens/license-organization/license-subfilter/license-organization-qos/license-organization-qos.component';
import { LicenseOrganizationHeatmap } from '@modules/license/screens/license-organization/license-subfilter/license-organization-heatmap/license-organization-heatmap.component';
import { LicenseOrganizationMonth } from '@modules/license/screens/license-organization/license-subfilter/license-organization-month/license-organization-month.component';
import { LicenseOrganizationDate } from '@modules/license/screens/license-organization/license-subfilter/license-organization-date/license-organization-date.component';
import { LicenseOrganizationHours } from '@modules/license/screens/license-organization/license-subfilter/license-organization-hours/license-organization-hours.component';
import { LicenseOrganizationUsage } from '@modules/license/screens/license-organization/license-subfilter/license-organization-usage/license-organization-usage.component';
import { LicenseOrganizationUtilizationAndHours } from '@modules/license/screens/license-organization/license-subfilter/license-organization-utilization-and-hours/license-organization-utilization-and-hours.component';
import { LicenseOrganizationCheckoutUser } from '@modules/license/screens/license-organization/license-subfilter/license-organization-checkout-user/license-organization-checkout-user.component';
import { LicenseOrganizationCheckoutCount } from '@modules/license/screens/license-organization/license-subfilter/license-organization-checkout-count/license-organization-checkout-count.component';
import { LicenseOrganizationLongDuration } from '@modules/license/screens/license-organization/license-subfilter/license-organization-long-duration/license-organization-long-duration.component';
import { LicenseOrganizationDenial } from '@modules/license/screens/license-organization/license-subfilter/license-organization-denial/license-organization-denial.component';
import { LicenseOrganizationBorrow } from '@modules/license/screens/license-organization/license-subfilter/license-organization-borrow/license-organization-borrow.component';
import { LicenseOrganizationDivision } from '@modules/license/screens/license-organization/license-subfilter/license-organization-division/license-organization-division.component';
import { LicenseOrganizationDepartment } from '@modules/license/screens/license-organization/license-subfilter/license-organization-department/license-organization-department.component';
import { LicenseOrganizationReservation } from '@modules/license/screens/license-organization/license-subfilter/license-organization-reservation/license-organization-reservation.component';
import { LicenseOrganizationAssetInfo } from '@modules/license/screens/license-organization/license-subfilter/license-organization-asset-info/license-organization-asset-info.component';
import { LicenseOrganizationDebugData } from '@modules/license/screens/license-organization/license-subfilter/license-organization-debug-data/license-organization-debug-data.component';
import { LicenseOrganizationBundle } from '@modules/license/screens/license-organization/license-subfilter/license-organization-bundle/license-organization-bundle.component';

@Component({
  selector: 'app-tab-instance',
  standalone: true,
  providers: [FilterServiceGlobal, FilterState],
  imports: [
    Admin,
    Dashboard,
    Cost,
    Billing,
    MyReport,
    License,
    Cloud,
    Process,
    Asset,
    Compliance,
    Hpc,
    MultiSite,
    SoftwareRegister,
    LicenseManager,
    Software,
    CustomLicense,
    PlannerPortal,
    SoftwareReservation,
    Chatbots,
    SoftwareDashboard,
    ProjectPortal,
    LicenseOrganizationSummary,
    LicenseOrganizationUtilization,
    LicenseOrganizationHistory,
    LicenseOrganizationQos,
    LicenseOrganizationHeatmap,
    LicenseOrganizationMonth,
    LicenseOrganizationDate,
    LicenseOrganizationHours,
    LicenseOrganizationUsage,
    LicenseOrganizationUtilizationAndHours,
    LicenseOrganizationCheckoutUser,
    LicenseOrganizationCheckoutCount,
    LicenseOrganizationLongDuration,
    LicenseOrganizationDenial,
    LicenseOrganizationBorrow,
    LicenseOrganizationDivision,
    LicenseOrganizationDepartment,
    LicenseOrganizationReservation,
    LicenseOrganizationAssetInfo,
    LicenseOrganizationDebugData,
    LicenseOrganizationBundle
  ],
  templateUrl: './tab-instance.component.html',
  styles: [`
    :host {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 0;
      height: 100%;
    }
    :host > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-height: 0;
      height: 100%;
    }
  `]
})
export class TabInstanceComponent {
  readonly tab = input.required<LayoutTab>();
}

