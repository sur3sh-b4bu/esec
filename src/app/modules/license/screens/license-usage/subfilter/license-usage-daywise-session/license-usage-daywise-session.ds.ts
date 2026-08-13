import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

export interface DaywiseSessionRow {
  s_no: number;
  date: string;
  user_id: string;
  computer: string;
  start_time: string;
  end_time: string;
  duration_hours: number;
  status: string;
}

@Injectable()
export class LicenseUsageDaywiseSessionDataSource extends BaseDataSource<DaywiseSessionRow> {
  override procedure = 'esms_m.r_organization_usage_daywise_session';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
