import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationDebugDataDataSource } from './license-organization-debug-data.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationDebugDataContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationDebugDataDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'type', headerName: 'Type', width: 80, valueGetter: (params) => params.data?.type ?? 'de' },
    {
      headerName: 'User',
      children: [
        { field: 'user_id', headerName: 'Id', width: 120, valueGetter: (params) => params.data?.user_id || params.data?.user }
      ]
    },
    { field: 'computer', headerName: 'Computer', width: 160 },
    {
      headerName: 'Access',
      children: [
        { field: 'access_date', headerName: 'Date', width: 120, valueGetter: (params) => params.data?.access_date || params.data?.c_date },
        { field: 'access_time', headerName: 'Time', width: 100, valueGetter: (params) => params.data?.access_time || params.data?.c_time }
      ]
    },
    { field: 'code_1', headerName: 'Code 1', width: 90, valueGetter: (params) => params.data?.code_1 ?? params.data?.code1 },
    { field: 'code_2', headerName: 'Code 2', width: 90, valueGetter: (params) => params.data?.code_2 ?? params.data?.code2 },
    { field: 'info', headerName: 'Info', width: 350, flex: 1 }
  ];
}
