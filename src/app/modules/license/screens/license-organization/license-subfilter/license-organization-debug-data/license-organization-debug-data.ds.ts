import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';
import { formatDateForMySQL } from '@shared/utils/date-format.utils';

export interface DebugDataRow {
  s_no?: number;
  user_id: string;
  cluster: string;
  version: string;
  computer: string;
  access_date: string;
  access_time: string;
  code1: string;
  code2: string;
}

@Injectable()
export class LicenseOrganizationDebugDataDataSource extends BaseDataSource<DebugDataRow> {
  override procedure = 'esms_m.r_organization_debug_data';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('27005@MSILENGSAOLIC02');
  selectedFeature = signal('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    const start = formatDateForMySQL(this.statusBarService?.startDate?.(), '2021-02-01');
    const end = formatDateForMySQL(this.statusBarService?.endDate?.(), '2026-08-09');

    return [
      this.selectedServer(),
      this.selectedFeature(),
      start,
      end
    ];
  }
}
