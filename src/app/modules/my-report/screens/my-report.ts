import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { MyReportAgentWindows } from './my-report-agent-windows/my-report-agent-windows';
import { MyReportDepartment } from './my-report-department/my-report-department';
import { MyReportDivision } from './my-report-division/my-report-division';
import { MyReportFeature } from './my-report-feature/my-report-feature';
import { MyReportGroup } from './my-report-group/my-report-group';
import { MyReportProcess } from './my-report-process/my-report-process';
import { MyReportReportType1 } from './my-report-report-type-1/my-report-report-type-1';
import { MyReportServer } from './my-report-server/my-report-server';
import { MyReportUsage } from './my-report-usage/my-report-usage';

@Component({
  selector: 'app-my-report',
  imports: [
    MyReportAgentWindows,
    MyReportDepartment,
    MyReportDivision,
    MyReportFeature,
    MyReportGroup,
    MyReportProcess,
    MyReportReportType1,
    MyReportServer,
    MyReportUsage
  ],
  templateUrl: './my-report.html',
  styleUrl: './my-report.css',
})
export class MyReport {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
