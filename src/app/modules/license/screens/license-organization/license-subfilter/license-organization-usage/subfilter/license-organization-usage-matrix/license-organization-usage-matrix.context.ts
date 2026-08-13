import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationUsageMatrixDataSource } from './license-organization-usage-matrix.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationUsageMatrixContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationUsageMatrixDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'user_id', headerName: 'User Id', width: 120 },
    { field: 'computer', headerName: 'Computer', width: 160 },
    { field: 'day_1', headerName: 'Day 1', width: 90 },
    { field: 'day_2', headerName: 'Day 2', width: 90 },
    { field: 'day_3', headerName: 'Day 3', width: 90 },
    { field: 'day_4', headerName: 'Day 4', width: 90 },
    { field: 'day_5', headerName: 'Day 5', width: 90 },
    { field: 'day_6', headerName: 'Day 6', width: 90 },
    { field: 'day_7', headerName: 'Day 7', width: 90 },
    { field: 'total_hours', headerName: 'Total Hours', width: 120 }
  ];
}
