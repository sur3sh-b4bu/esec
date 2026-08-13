import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationDivisionDataSource } from './license-organization-division.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationDivisionContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationDivisionDataSource);
  filterService = inject(FilterServiceGlobal);
  statusBarService = inject(StatusBarService);

  readonly columns: (ColDef | ColGroupDef)[] = [
      { headerName: 'S.No', valueGetter: 'node.rowIndex + 1', pinned: 'left', width: 75 },
      { field: 'sw', headerName: 'Software', pinned: 'left', width: 140, cellStyle: { color: '#0e0e0fff', fontWeight: '600' } },
      { field: 'server', headerName: 'Server', pinned: 'left', width: 190 },
      { field: 'location', headerName: 'Location', pinned: 'left', width: 190 },
      { field: 'lic_name', headerName: 'Feature', pinned: 'left', width: 190 },
      { field: 'divn', headerName: 'Division', pinned: 'left', width: 190 },
      {
        headerName: 'Issued',
        children: [
          { field: 'l_qty_i', headerName: 'Last', width: 90 },
          { field: 'max_qty_i', headerName: 'Max', width: 90 }
        ]
      },
      {
        headerName: 'Borrow',
        children: [
          { field: 'qty_db', headerName: 'Qty', width: 100 }
        ]
      },
      {
        headerName: 'Day Peak',
        children: [
          { field: 'qty_dp', headerName: 'Qty', width: 80 },
          {
            field: 'p_dp',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Day Avg',
        children: [
          { field: 'qty_da', headerName: 'Qty', width: 80 },
          {
            field: 'p_da',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Day Peak Mean',
        children: [
          { field: 'qty_dpm', headerName: 'Qty', width: 80 },
          {
            field: 'p_dpm',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Day Avg Mean',
        children: [
          { field: 'qty_dam', headerName: 'Qty', width: 80 },
          {
            field: 'p_dam',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Work Peak',
        children: [
          { field: 'qty_wp', headerName: 'Qty', width: 80 },
          {
            field: 'p_wp',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Work Avg',
        children: [
          { field: 'qty_wa', headerName: 'Qty', width: 80 },
          {
            field: 'p_wa',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Work Peak Mean',
        children: [
          { field: 'qty_wpm', headerName: 'Qty', width: 80 },
          {
            field: 'p_wpm',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
      {
        headerName: 'Work Avg Mean',
        children: [
          { field: 'qty_wam', headerName: 'Qty', width: 80 },
          {
            field: 'p_wam',
            headerName: '%',
            width: 100,
            filter: 'agNumberColumnFilter',
            valueFormatter: statusPercentFormatter,
            cellStyle: { fontSize: '11px' }
          }
        ]
      },
  
      {
        headerName: `License Hours Used`,
        children: [
          { field: 'tot_du_q', headerName: 'Used', width: 110 }
        ]
      },
      { headerName: 'User', field: 'di', width: 85 },
      { headerName: 'Denial Count', field: 'de', width: 95 },
      { headerName: 'Denial Users', field: 'ad', width: 95 },
      { headerName: 'True Denial', field: 'td', width: 95 },
      {
        headerName: 'Days',
        children: [
          { field: 'w_days', headerName: 'Working', width: 100 },
          { field: 'days', headerName: 'License', width: 100 }
        ]
      },
      { headerName: 'Expiry', field: 'expiry', width: 110 },
      { headerName: 'Enrolled Date', field: 'start_date', width: 140 },
      { headerName: 'Collected Date', field: 'last_date', width: 140 },
      { headerName: 'Status', field: 'status', width: 110, filter: 'agSetColumnFilter' }
    ];

}



"call esms_m.r_division_utilization_month('27005@MSILENGSAOLIC02','MATLAB_Report_Gen','ERD-DC','2025-08-01','2026-08-31','08:00','17:00');"
"call esms_m.r_organization_utilization_month('27005@MSILENGSAOLIC02','MATLAB_Report_Gen','2025-08-01','2026-08-31','08:00','17:00');"