import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationUsageSummaryDataSource } from './license-organization-usage-summary.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationUsageSummaryContext implements GridContext<any> {
  statusbarService = inject(StatusBarService);
  dataSource = inject(LicenseOrganizationUsageSummaryDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {
    pinnedTopRowData: [
      {
        user_id: 'Summary',
        total_hours: 65.8434,
        p_total_hours: 30.1,
        work_hours: 50.6265,
        p_work_hours: 23.2,
        lic_total_hours: 73.6121,
        lic_work_hours: 56.6312,
        count_days: 19,
        count_sessions: 30
      }
    ]
  };

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
    { field: 'lic_type', headerName: 'License Type' },
    { field: 'wksn', headerName: 'Computer', width: 160 },
    {
      headerName: `Hours - ${this.statusbarService.usageTime()} Hrs`,
      children: [
        { field: 'du', headerName: 'Total', width: 110 },
        {
          headerName: '%',
          width: 95,
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusbarService.usageTime());
            return (params.data.du / (params.data.count_days * hour)) * 100;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        },
        { field: 'dw', headerName: 'Work', width: 110 },
        {
          headerName: '%',
          width: 95,
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusbarService.usageTime());
            return (params.data.dw / (params.data.count_days * hour)) * 100;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },
    {
      headerName: 'License Hours',
      children: [
        { field: 'du_q', headerName: 'Total', width: 110 },
        { field: 'dw_q', headerName: 'Work', width: 110 }
      ]
    },
    {
      headerName: 'Count',
      children: [
        { field: 'count_days', headerName: 'Days', width: 90 },
        { field: 'session', headerName: 'Sessions', width: 100 }
      ]
    },
    { field: 'a_date', headerName: 'Last Access Date', width: 140 }
  ];
  }
}

