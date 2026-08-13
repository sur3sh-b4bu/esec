import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationIndicatorDataSource } from './license-organization-summary.ds';

@Injectable()
export class LicenseOrganizationSummaryContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationIndicatorDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 },
    { field: 'l_qty_i', headerName: 'Issued Qty', width: 120 },
    { field: 'qty_dp', headerName: 'Day Peak Qty', width: 130 },
    { field: 'qty_wp', headerName: 'Work Peak Qty', width: 130 },
    { field: 'p_dp', headerName: 'Day Peak %', width: 120 }
  );
}
