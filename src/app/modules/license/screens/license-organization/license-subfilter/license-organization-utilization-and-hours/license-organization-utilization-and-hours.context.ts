import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { LicenseOrganizationUtilizationAndHoursDataSource } from './license-organization-utilization-and-hours.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationUtilizationAndHoursContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationUtilizationAndHoursDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    {
      field: 'division',
      headerName: 'Division',
      width: 130,
      valueGetter: (params) => params.data?.division || params.data?.dept || params.data?.group || params.data?.name
    },
    {
      field: 'user_count',
      headerName: 'User',
      width: 75,
      cellRenderer: (params: any) => {
        if (!params.value) return '0';
        return `<span style="color:#2563eb; font-weight:600; text-decoration:underline; cursor:pointer;">${params.value}</span>`;
      }
    },
    {
      headerName: 'License Hours',
      children: [
        {
          field: 'total_pct',
          headerName: 'Total (%)',
          width: 110,
          valueGetter: (params) => params.data?.total_pct ?? params.data?.lic_total_pct ?? params.data?.p_total,
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    }
  ];
}
