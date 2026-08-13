import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

export interface UsageSummaryRow {
  s_no?: number | string;
  user_id: string;
  cluster: string;
  version: string;
  computer: string;
  total_hours: number;
  p_total_hours: number;
  work_hours: number;
  p_work_hours: number;
  lic_total_hours: number;
  lic_work_hours: number;
  count_days: number;
  count_sessions: number;
  last_access_date: string;
}

@Injectable()
export class LicenseUsageSummaryDataSource extends BaseDataSource<UsageSummaryRow> {
  override procedure = 'esms_m.r_organization_usage_summary';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
