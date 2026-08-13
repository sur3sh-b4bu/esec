import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationUsageMatrixDepartmentDataSource } from './license-organization-usage-matrix-department.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationUsageMatrixDepartmentContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationUsageMatrixDepartmentDataSource);
  filterService = inject(FilterServiceGlobal);
  statusbarService = inject(StatusBarService);

  get columns(): (ColDef | ColGroupDef)[] {
    return [
    { field: 's_no', headerName: 'S.No', valueGetter: 'node.rowIndex + 1', width: 70 },
    { field: 'divn', headerName: 'Division', width: 110, aggFunc: 'first' },
    { field: 'dept', headerName: 'Department', width: 110, rowGroup: true, aggFunc: 'first' },
    { headerName: 'User', width: 80, aggFunc: 'count' },
    {
      headerName: `Hours - ${this.statusbarService.usageTime()} Hrs`,
      children: [
        { field: 'du', headerName: 'Total', width: 110, aggFunc: 'sum' },
        {
          headerName: '%',
          width: 95,
          aggFunc: 'avg',
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusbarService.usageTime());
            return (params.data.du / (params.data.count_days * hour)) * 100;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        },
        { field: 'dw', headerName: 'Work', width: 110, aggFunc: 'sum' },
        {
          headerName: '%',
          width: 95,
          aggFunc: 'avg',
          valueGetter: (params: any) => {
            if (!params.data) return null;
            const hour = Number(this.statusbarService.usageTime());
            return (params.data.du / (params.data.count_days * hour)) * 100;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },
    {
      headerName: 'License Hours',
      children: [
        { field: 'du_q', headerName: 'Total', width: 110, aggFunc: 'sum' },
        { field: 'dw_q', headerName: 'Work', width: 110, aggFunc: 'sum' }
      ]
    }
  ];
  }
}
