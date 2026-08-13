import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

export interface DaywiseSummaryRow {
  s_no: number;
  sw?: number,
  server?: string,
  location?: string,
  lic?: string,
  lic_name?: string,
  asset_info: string,
  user_id: string,
  wksn: string,
  user_name: string,
  region: string,
  country: string,
  divn: string,
  dept: string,
  clus: string,
  section: string,
  rpt_id: string,
  city: string,
  state: string,
  bldg: string,
  g_type: string,
  g_name: string,
  ver: string,
  lic_type: string,
  date: string,
  holi_date: string,
  du: number,
  dw: number,
  du_q: number,
  dw_q: number
}

@Injectable()
export class LicenseOrganizationUsageDaywiseSummaryDataSource extends BaseDataSource<DaywiseSummaryRow> {
  override procedure = 'esms_m.r_organization_usage_1';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('');
  selectedFeature = signal('');

  override buildParams(_filterService: FilterServiceGlobal): any[] {

    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.statusBarService?.startDate().split('-').reverse().join('-'),
      this.statusBarService?.endDate().split('-').reverse().join('-')
    ];
  }
}
