import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseUsageDaywiseSessionDataSource } from './license-usage-daywise-session.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseUsageDaywiseSessionContext implements GridContext<any> {
  dataSource = inject(LicenseUsageDaywiseSessionDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'user_id', headerName: 'User Id', width: 120 },
    { field: 'computer', headerName: 'Computer', width: 160 },
    { field: 'start_time', headerName: 'Session Start Time', width: 150 },
    { field: 'end_time', headerName: 'Session End Time', width: 150 },
    { field: 'duration_hours', headerName: 'Duration (Hours)', width: 140 },
    { field: 'status', headerName: 'Status', width: 120 }
  ];
}
