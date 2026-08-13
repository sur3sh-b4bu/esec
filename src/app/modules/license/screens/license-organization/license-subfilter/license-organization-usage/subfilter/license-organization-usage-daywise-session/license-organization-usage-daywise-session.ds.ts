import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

export interface DaywiseSessionRow {
  s_no: number;
  sw?: string;
  server?: string;
  location?: string;
  lic?: string;
  lic_name?: string;
  asset_info: string;
  user_id: string;
  wksn: string;
  user_name: string;
  region: string;
  country: string;
  divn: string;
  dept: string;
  clus: string;
  section: string;
  rpt_id: string;
  city: string;
  state: string;
  bldg: string;
  g_type: string;
  g_name: string;
  ver: string;
  lic_type: string;
  s_date: string;
  s_time: string;       
  date: string;
  o_time: string;
  i_time: string;
  holi_date: string;
  qty_u: number;
  qty_b: number;
  du: number;
  dw: number;
}

@Injectable()
export class LicenseOrganizationUsageDaywiseSessionDataSource extends BaseDataSource<DaywiseSessionRow> {
  override procedure = 'esms_m.r_organization_usage_2';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('');
  selectedFeature = signal('');

  override buildParams(_filterService: FilterServiceGlobal): any[] {

    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.statusBarService.startDate().split('-').reverse().join('-'),
      this.statusBarService.endDate().split('-').reverse().join('-')
    ];
  }
}
