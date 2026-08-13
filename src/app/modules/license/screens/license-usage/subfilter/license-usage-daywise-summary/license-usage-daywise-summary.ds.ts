import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

export interface DaywiseSummaryRow {
  s_no: number;
  date: string;
  user_id: string;
  computer: string;
  version: string;
  total_hours: number;
  work_hours: number;
  sessions: number;
  last_access_time: string;
}

@Injectable()
export class LicenseUsageDaywiseSummaryDataSource extends BaseDataSource<DaywiseSummaryRow> {
  override procedure = 'esms_m.r_organization_usage_daywise_summary';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
