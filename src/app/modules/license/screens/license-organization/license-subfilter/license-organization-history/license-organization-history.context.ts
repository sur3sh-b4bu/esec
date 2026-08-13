import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationHistoryDataSource, LicenseOrganizationHistoryDataSource1 } from './license-organization-history.ds';

@Injectable()
export class LicenseOrganizationHistoryContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationHistoryDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'qty_i', headerName: 'Issued', width: 150 },
    { field: 'qty_dp', headerName: 'Day Peak (DP)', width: 220 },
  );
}

@Injectable()
export class LicenseOrganizationHistoryContext1 implements GridContext<any> {
  dataSource = inject(LicenseOrganizationHistoryDataSource1);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'total', headerName: 'Total', width: 150 },
    { field: 'p100', headerName: '100 Percentile (p100)', width: 220 },
    { field: 'pp100', headerName: '100th Percentile (pp100)', width: 220 }
  );
}
