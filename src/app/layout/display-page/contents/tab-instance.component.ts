import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'app-tab-instance',
  standalone: true,
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
    ProjectPortal
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
  @Input({ required: true }) tab!: LayoutTab;
}
