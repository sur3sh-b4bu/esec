import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationDataSource } from './license-organization.ds';
import { LicenseOrganizationRow } from './license-organization.model';
import { PivotConfig } from '@framework/grid/utils/pivot-engine';
import { PIVOT_GRID_OPTIONS } from '@shared/config/grid.config';

@Injectable({
  providedIn: 'root'
})
export class LicenseOrganizationContext implements GridContext<LicenseOrganizationRow> {

  dataSource = inject(LicenseOrganizationDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = PIVOT_GRID_OPTIONS;

  // pivotConfig: PivotConfig = {
  //   rowGroupKey: 'lic_name',
  //   pivotKey: 'location',
  //   valueKey: 'qty_dp',
  //   aggFunc: 'sum'
  // };

  columns = gridColumns(
    { field: 'sw', width: 150, pinned: 'left' },
    { field: 'server', width: 150, pinned: 'left' },
    { field: 'location', width: 150 },
    { field: 'lic', width: 150 },
    { field: 'lic_name', width: 150, pinned: 'left', rowGroup: true },
    { field: "Day Peak", pivot: true },
    { field: "l_qty_i" },
    { field: "l_qty_r" },
    { field: "max_qty_i" },
    { field: "qty_r" },
    { field: "qty_db" },
    { field: "qty_dp", aggFunc: "sum" },
    { field: "qty_da" },
    { field: "qty_dpm" },
    { field: "qty_dam" },
    { field: "qty_wp" },
    { field: "qty_wa" },
    { field: "qty_wpm" },
    { field: "qty_wam" },
    { field: "p_dp", aggFunc: "sum" },
    { field: "p_da" },
    { field: "p_dpm" },
    { field: "p_dam" },
    { field: "p_wp" },
    { field: "p_wa" },
    { field: "p_wpm" },
    { field: "p_wam" },
    { field: "w_days" },
    { field: "days" },
    { field: "dp_days" },
    { field: "w_dp_days" },
    { field: "di" },
    { field: "ndivn" },
    { field: "ndept" },
    { field: "de" },
    { field: "ad" },
    { field: "td" },
    { field: "tlh_24" },
    { field: "tot_du_q" },
    { field: "expiry" },
    // "start_date",
    { headerName: "Collected Date", field: "last_date" },
    "status",
    // "bundle"
  );
}
