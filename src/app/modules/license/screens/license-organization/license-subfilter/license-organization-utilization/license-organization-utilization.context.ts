import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationUtilizationDataSource } from './license-organization-utilization.ds';

@Injectable()
export class LicenseOrganizationUtilizationContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationUtilizationDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'qty_i', headerName: 'Issued Qty', width: 220 },
    { field: 'qty_r', headerName: 'Reserved Qty', width: 200 },
    { field: 'qty_db', headerName: 'Denied Qty', width: 130 },
    { field: 'qty_dp', headerName: 'Day Peak Qty', width: 130 },
    { field: 'qty_da', headerName: 'Day Peak Avg', width: 130 },
    { field: 'qty_dpm', headerName: 'Day Peak Mean', width: 130 },
    { field: 'qty_dam', headerName: 'Day Peak Avg Mean', width: 130 },
    { field: 'qty_wp', headerName: 'Work Peak Qty', width: 130 },
    { field: 'qty_wa', headerName: 'Work Peak Avg', width: 130 },
    { field: 'qty_wpm', headerName: 'Work Peak Mean', width: 130 },
    { field: 'qty_wam', headerName: 'Work Peak Avg Mean', width: 130 },
    { field: 'p_dp', headerName: 'Day Peak %', width: 130 },
    { field: 'p_da', headerName: 'Day Peak Avg %', width: 130 },
    { field: 'p_dpm', headerName: 'Day Peak Mean %', width: 130 },
    { field: 'p_dam', headerName: 'Day Peak Avg Mean %', width: 130 },
    { field: 'p_wp', headerName: 'Work Peak %', width: 130 },
    { field: 'p_wa', headerName: 'Work Peak Avg %', width: 130 },
    { field: 'p_wpm', headerName: 'Work Peak Mean %', width: 130 },
    { field: 'p_wam', headerName: 'Work Peak Avg Mean %', width: 130 },
    { field: 'c_user', headerName: 'Concurrent Users', width: 130 },
    { field: 'p_c_user', headerName: 'Concurrent Users %', width: 130 }
  );
}