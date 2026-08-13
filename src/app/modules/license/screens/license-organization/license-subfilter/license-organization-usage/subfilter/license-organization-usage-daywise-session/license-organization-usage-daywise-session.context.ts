import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationUsageDaywiseSessionDataSource } from './license-organization-usage-daywise-session.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationUsageDaywiseSessionContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationUsageDaywiseSessionDataSource);
  filterService = inject(FilterServiceGlobal);
  statusBarService = inject(StatusBarService);

  gridOptions = {};

  get columns(): (ColDef | ColGroupDef)[] {
    return [
    { field: 's_no', headerName: 'S.No', valueGetter: 'node.rowIndex + 1', width: 70 },
    { field: 'asset_info', headerName: 'Asset Info' },
    {
      headerName: 'User',
      children: [
        { field: 'user_id', headerName: 'User Id', width: 120 },
        { field: 'user_name', headerName: 'Name', width: 120 },
        { field: 'region', headerName: 'Region', width: 110 },
        { field: 'country', headerName: 'Country', width: 110 },
        { field: 'divn', headerName: 'Division', width: 110 },
        { field: 'dept', headerName: 'Department', width: 110 },
        { field: 'section', headerName: 'Section', width: 110 },
        { field: 'rpt_id', headerName: 'Report ID', width: 110 },
        { field: 'city', headerName: 'City', width: 110 },
        { field: 'state', headerName: 'State', width: 110 },
        { field: 'bldg', headerName: 'Building', width: 110 }
      ]
    },
    { field: 'clus', headerName: 'Cluster', width: 110 },
    { headerName: 'Group',
      children: [
        { field: 'g_type', headerName: 'Group Type', width: 110 },
        { field: 'g_name', headerName: 'Group Name', width: 110 }
      ]
    },
    { field: 'ver', headerName: 'Version', width: 100 },
    { field: 'wksn', headerName: 'Computer', width: 160 },
    { field: 'date', headerName: 'Date', width: 130},
    {
      headerName: 'Time',
      children: [
        { field: 'o_time', headerName: 'Out', width: 100},
        { field: 'i_time', headerName: 'In', width: 100}
      ]
    },
    { field: 'holi_date', headerName: 'Holiday', width: 90 },
    {
      headerName: 'Start',
      children: [
        { field: 's_date', headerName: 'Date', width: 120 },
        { field: 's_time', headerName: 'Time', width: 100}
      ]
    },
    { field: 'qty_u', headerName: 'Used', width: 80},
    { field: 'qty_b', headerName: 'Borrow', width: 80},
    {
      headerName: `Hours - ${this.statusBarService.usageTime()} Hrs`,
      children: [
        { field: 'du', headerName: 'Total', width: 110},
        {
          headerName: '%',
          width: 95,
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusBarService.usageTime());
            return params.data.du * hour;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        },
        { field: 'dw', headerName: 'Work', width: 110},
        {
          headerName: '%',
          width: 95,
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusBarService.usageTime());
            return params.data.dw * hour;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },
    {
      headerName: 'License Hours',
      children: [
        { field: 'du', headerName: 'Total', width: 110},
        { field: 'dw', headerName: 'Work', width: 110}
      ]
    }
  ];
  }
}
