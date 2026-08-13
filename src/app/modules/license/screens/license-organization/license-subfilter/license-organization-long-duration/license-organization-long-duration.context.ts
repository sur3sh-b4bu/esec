import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationLongDurationDataSource } from './license-organization-long-duration.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationLongDurationContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationLongDurationDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'user_id', headerName: 'User Id', width: 120 },
    { field: 'computer', headerName: 'Computer', width: 160 },
    {
      headerName: 'Start',
      children: [
        { field: 'start_date', headerName: 'Date', width: 120, valueGetter: (params) => params.data?.start_date || params.data?.c_date },
        { field: 'start_time', headerName: 'Time', width: 100, valueGetter: (params) => params.data?.start_time || params.data?.time_out }
      ]
    },
    {
      headerName: 'Last Updated',
      children: [
        { field: 'last_date', headerName: 'Date', width: 120, valueGetter: (params) => params.data?.last_date || params.data?.c_date },
        { field: 'last_time', headerName: 'Time', width: 100, valueGetter: (params) => params.data?.last_time || params.data?.time_in }
      ]
    },
    { field: 'hours_used', headerName: 'Hours Used', width: 120, valueGetter: (params) => params.data?.hours_used ?? params.data?.total_hours },
    { field: 'lic_hours', headerName: 'License Hours', width: 120, valueGetter: (params) => params.data?.lic_hours ?? params.data?.lic_total_hours },
    { field: 'used', headerName: 'Used', width: 80, valueGetter: (params) => params.data?.used ?? 1 },
    { field: 'borrow', headerName: 'Borrow', width: 80, valueGetter: (params) => params.data?.borrow ?? 0 }
  ];
}
