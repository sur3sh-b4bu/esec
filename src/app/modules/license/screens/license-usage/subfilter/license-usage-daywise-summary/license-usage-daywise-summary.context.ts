import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseUsageDaywiseSummaryDataSource } from './license-usage-daywise-summary.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseUsageDaywiseSummaryContext implements GridContext<any> {
  dataSource = inject(LicenseUsageDaywiseSummaryDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'user_id', headerName: 'User Id', width: 120 },
    { field: 'computer', headerName: 'Computer', width: 160 },
    { field: 'version', headerName: 'Version', width: 100 },
    { field: 'total_hours', headerName: 'Total Hours', width: 120 },
    { field: 'work_hours', headerName: 'Work Hours', width: 120 },
    { field: 'sessions', headerName: 'Sessions', width: 100 },
    { field: 'last_access_time', headerName: 'Last Access Time', width: 150 }
  ];
}
