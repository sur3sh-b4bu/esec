import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { SubFilterBarService } from '@core/services/sub-filterbar.service';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationUtilizationDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_utilization_month';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');
  statusbarService = inject(StatusBarService);

  filterService = inject(FilterServiceGlobal);
  subFilterBarService = inject(SubFilterBarService);

  override buildParams(): any[] {
    const server = this.selectedServer() || '27005@MSILENGSAOLIC02';
    const feature = this.selectedFeature() || 'MATLAB_Report_Gen';
    const startD = '2025-08-01';
    const endD = '2026-08-31';
    const startT = '08:00';
    const endT = '17:00';

    return [server, feature, startD, endD, startT, endT];
  }
}

