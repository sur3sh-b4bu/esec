import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';
import { formatDateForMySQL } from '@shared/utils/date-format.utils';

export interface UtilizationHoursRow {
  s_no?: number;
  category: string;
  total_users: number;
  total_sessions: number;
  utilization_percent: number;
  total_hours: number;
  work_hours: number;
}

@Injectable()
export class LicenseOrganizationUtilizationAndHoursDataSource extends BaseDataSource<UtilizationHoursRow> {
  override procedure = 'esms_m.r_organization_usage_utilization_date_2';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('27005@MSILENGSAOLIC02');
  selectedFeature = signal('MATLAB_Report_Gen');
  periodMode = signal<'month' | 'date'>('date');
  hoursMode = signal<'24' | 'work'>('24');
  workingDays = signal('Y');
  selectedCategory = signal<'division' | 'department' | 'group'>('division');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    const start = formatDateForMySQL(this.statusBarService?.startDate?.(), '2025-08-15');
    const end = formatDateForMySQL(this.statusBarService?.endDate?.(), '2026-08-09');

    if (this.periodMode() === 'month') {
      this.procedure = 'esms_m.r_organization_usage_utilization_month_1';
      return [
        this.selectedServer(),
        this.selectedFeature(),
        start,
        end,
        ' ',
        this.workingDays()
      ];
    } else {
      this.procedure = 'esms_m.r_organization_usage_utilization_date_2';
      return [
        this.selectedServer(),
        this.selectedFeature(),
        start,
        end,
        this.workingDays()
      ];
    }
  }
}
