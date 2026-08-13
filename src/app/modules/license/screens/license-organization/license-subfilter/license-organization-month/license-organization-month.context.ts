import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationMonthDataSource } from './license-organization-month.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';


@Injectable()
export class LicenseOrganizationMonthContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationMonthDataSource);
  filterService = inject(FilterServiceGlobal);

  columns: (ColDef | ColGroupDef)[] = [
    { field: 'c_month', headerName: 'Month', width: 150 },
    { field: 'qty_i', headerName: 'Issued Max', width: 120 },
    { field: 'qty_r', headerName: 'Reserved Max', width: 120 },
    { field: 'qty_db', headerName: 'Borrow', width: 120 },
    { headerName: 'Day Peak', children: [
      { field: 'qty_dp', headerName: 'Qty', width: 120 },
      { field: 'p_dp', headerName: '% D Peak', width: 120 }
    ]},
    { headerName: 'Week Peak', children: [
      { field: 'qty_wp', headerName: 'Qty', width: 120 },
      { field: 'p_wp', headerName: '% W Peak', width: 120 },
    ]},
    
    { headerName: "License Hour - 9.75", children: [
    { field: 'used_hours', headerName: 'Used', width: 120 },
    { field: 'license_hours', headerName: 'Available', width: 120 },
    { field: 'p_used_hours', headerName: '% Used', width: 120 }, ] },
    { field: 'di', headerName: 'Users', width: 120 },
    // { field: 'de', headerName: 'E License', width: 120 },
    // { field: 'ad', headerName: 'Ad License', width: 120 },
    { field: 'td', headerName: 'True Denial', width: 120 },
    { field: 'count_days', headerName: 'Days', width: 120 }
  ];
}

