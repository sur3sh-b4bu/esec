import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

export interface MatrixDivisionRow {
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
  qty_r?: string;
  ver: string;
  lic_type: string;
  du: number;
  dw: number;
  du_q: number;
  dw_q: number;
  count_days: number;
  session: number;
  a_date: string;
}

@Injectable()
export class LicenseOrganizationUsageMatrixDivisionDataSource extends BaseDataSource<MatrixDivisionRow> {
  override procedure = 'esms_m.r_organization_usage';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('');
  selectedFeature = signal('');
  workingDays = signal('Y');

  override buildParams(_filterService: FilterServiceGlobal): any[] {

    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.statusBarService.startDate().split('-').reverse().join('-'),
      this.statusBarService.endDate().split('-').reverse().join('-'),
      this.workingDays()
    ];
  }
}
