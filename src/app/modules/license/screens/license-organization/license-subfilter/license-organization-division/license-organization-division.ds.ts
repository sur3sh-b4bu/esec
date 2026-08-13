import { Injectable,inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationDivisionDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_groups_division_grid';
  selectedServer = signal<string>('');
  selectedFeature = signal<string>('');
  filterService = inject(FilterServiceGlobal);

  override buildParams(): any[] {
    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.filterService.range()
    ];
  }
}

export interface LicenseOrganizationDivisionRow{
  sw:string;
  server:string;
  location:string;
  lic:string;
  lic_name:string;
  divn:string;
  l_qty_i:number;
  max_qty_i:number;
  qty_db:number;
  qty_dp:number;
  qty_da:number;
  qty_dpm:number;
  qty_dam:number;
  qty_wp:number;
  qty_wa:number;
  qty_wpm:number;
  qty_wam:number;
  p_dp:number;
  p_da:number;
  p_dpm:number;
  p_dam:number;
  p_wp:number;
  p_wa:number;
  p_wpm:number;
  p_wam:number;
  w_days:number;
  days:number;
  di:number;
  de:number;
  ad:number;
  td:number;
  tot_du_q:number;
  expiry:string;
  start_date:string;
  last_date:string;
  status:string;
  bundle:string;
}
  