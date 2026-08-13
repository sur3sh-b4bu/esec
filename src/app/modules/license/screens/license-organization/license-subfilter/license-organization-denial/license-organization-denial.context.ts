import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationDenialDataSource } from './license-organization-denial.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationDenialContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationDenialDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    {
      headerName: 'User',
      children: [
        { field: 'user_id', headerName: 'Id', width: 120, valueGetter: (params) => params.data?.user_id || params.data?.user }
      ]
    },
    { field: 'computer', headerName: 'Computer', width: 160 },
    {
      headerName: 'Start',
      children: [
        { field: 'start_date', headerName: 'Date', width: 120, valueGetter: (params) => params.data?.start_date || params.data?.c_date },
        { field: 'start_time', headerName: 'Time', width: 100, valueGetter: (params) => params.data?.start_time || params.data?.c_time }
      ]
    },
    { field: 'true_denial', headerName: 'True Denial', width: 110, valueGetter: (params) => params.data?.true_denial ?? 'N' },
    {
      headerName: 'Denial Code',
      children: [
        { field: 'major_code', headerName: 'Major', width: 90, valueGetter: (params) => params.data?.major_code || params.data?.major },
        { field: 'full_code', headerName: 'Full', width: 100, valueGetter: (params) => params.data?.full_code || params.data?.full }
      ]
    },
    { field: 'reason', headerName: 'Reason', width: 350, flex: 1 }
  ];
}
