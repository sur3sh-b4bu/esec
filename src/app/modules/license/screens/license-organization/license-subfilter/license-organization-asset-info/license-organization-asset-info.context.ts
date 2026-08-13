import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationAssetInfoDataSource } from './license-organization-asset-info.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationAssetInfoContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationAssetInfoDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    { field: 's_no', headerName: 'S.No', width: 65 },
    { field: 'feature', headerName: 'Feature', width: 140 },
    { field: 'asset_info', headerName: 'Asset Info', width: 140, valueGetter: (params) => params.data?.asset_info || params.data?.asset },
    { field: 'version', headerName: 'Version', width: 80 },
    { field: 'issued', headerName: 'Issued', width: 70 },
    {
      headerName: 'Day Peak',
      children: [
        { field: 'day_peak_qty', headerName: 'Qty', width: 70, valueGetter: (params) => params.data?.day_peak_qty ?? params.data?.d_qty },
        { field: 'day_peak_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.day_peak_pct ?? params.data?.d_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    {
      headerName: 'Work Peak',
      children: [
        { field: 'work_peak_qty', headerName: 'Qty', width: 70, valueGetter: (params) => params.data?.work_peak_qty ?? params.data?.w_qty },
        { field: 'work_peak_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.work_peak_pct ?? params.data?.w_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    {
      headerName: 'Work Avg',
      children: [
        { field: 'work_avg_qty', headerName: 'Qty', width: 70, valueGetter: (params) => params.data?.work_avg_qty ?? params.data?.wa_qty },
        { field: 'work_avg_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.work_avg_pct ?? params.data?.wa_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    {
      headerName: 'Work Peak Mean',
      children: [
        { field: 'work_peak_mean_qty', headerName: 'Qty', width: 85, valueGetter: (params) => params.data?.work_peak_mean_qty ?? params.data?.wpm_qty },
        { field: 'work_peak_mean_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.work_peak_mean_pct ?? params.data?.wpm_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    {
      headerName: 'Work Avg Mean',
      children: [
        { field: 'work_avg_mean_qty', headerName: 'Qty', width: 85, valueGetter: (params) => params.data?.work_avg_mean_qty ?? params.data?.wam_qty },
        { field: 'work_avg_mean_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.work_avg_mean_pct ?? params.data?.wam_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    { field: 'license_days', headerName: 'License Days', width: 100, valueGetter: (params) => params.data?.license_days ?? params.data?.days },
    { field: 'user_count', headerName: 'User', width: 70, valueGetter: (params) => params.data?.user_count ?? params.data?.users },
    { field: 'license_hours', headerName: 'License Hours', width: 100, valueGetter: (params) => params.data?.license_hours ?? params.data?.lic_hours },
    {
      headerName: 'Total',
      children: [
        { field: 'total_hours', headerName: 'Hours', width: 90, valueGetter: (params) => params.data?.total_hours ?? params.data?.tot_hours },
        { field: 'total_pct', headerName: '%', width: 80, valueGetter: (params) => params.data?.total_pct ?? params.data?.tot_pct, valueFormatter: statusPercentFormatter, cellStyle: { fontSize: '11px' } }
      ]
    },
    {
      headerName: 'Date',
      children: [
        { field: 'issued_date', headerName: 'Issued', width: 110, valueGetter: (params) => params.data?.issued_date || params.data?.start_date },
        { field: 'expiry_date', headerName: 'Expiry', width: 110, valueGetter: (params) => params.data?.expiry_date || params.data?.end_date }
      ]
    }
  ];
}
