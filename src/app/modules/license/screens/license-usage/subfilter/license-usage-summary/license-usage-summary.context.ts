import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseUsageSummaryDataSource } from './license-usage-summary.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseUsageSummaryContext implements GridContext<any> {
  dataSource = inject(LicenseUsageSummaryDataSource);
  filterService = inject(FilterServiceGlobal);
  statusbarService = inject(StatusBarService);

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
    { field: 's_no', headerName: 'S.No', width: 70 },
    { field: 'user_id', headerName: 'User Id', width: 120 },
    { field: 'cluster', headerName: 'Cluster', width: 110 },
    { field: 'version', headerName: 'Version', width: 100 },
    { field: 'computer', headerName: 'Computer', width: 160 },
    {
      headerName: `Hours - ${this.statusbarService.usageTime()} Hrs`,
      children: [
        { field: 'total_hours', headerName: 'Total', width: 110 },
        {
          field: 'p_total_hours',
          headerName: '%',
          width: 95,
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        },
        { field: 'work_hours', headerName: 'Work', width: 110 },
        {
          field: 'p_work_hours',
          headerName: '%',
          width: 95,
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },
    {
      headerName: 'License Hours',
      children: [
        { field: 'lic_total_hours', headerName: 'Total', width: 110 },
        { field: 'lic_work_hours', headerName: 'Work', width: 110 }
      ]
    },
    {
      headerName: 'Count',
      children: [
        { field: 'count_days', headerName: 'Days', width: 90 },
        { field: 'count_sessions', headerName: 'Sessions', width: 100 }
      ]
    },
    { field: 'last_access_date', headerName: 'Last Access Date', width: 140 }
  ];
  }
}
