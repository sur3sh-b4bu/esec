import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationUsageDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_usage';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('27005@MSILENGSAOLIC02');
  selectedFeature = signal('MATLAB_Report_Gen');
  workingDays = signal('Y');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    let start = '2025-08-15';
    let end = '2026-08-09';

    if (this.statusBarService?.startDate?.()) {
      start = this.statusBarService.startDate().split('-').reverse().join('-');
    }
    if (this.statusBarService?.endDate?.()) {
      end = this.statusBarService.endDate().split('-').reverse().join('-');
    }

    return [
      this.selectedServer(),
      this.selectedFeature(),
      start,
      end,
      this.workingDays()
    ];
  }
}
