import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationHoursDataSource } from './license-organization-hours.ds';

@Injectable()
export class LicenseOrganizationHoursContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationHoursDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'month', headerName: 'Month', width: 150 },
    { field: 'qty_i', headerName: 'Issued', width: 150 },
    { field: 'license_hours', headerName: 'License Hours', width: 150 },
    { field: 'di', headerName: 'User', width: 150 },
    { field: 'used_hours', headerName: 'Used Hour', width: 150 },
    { field: 'work_hours', headerName: 'Working Hours', width: 150 },
    { field: 'license_hours_used', headerName: 'Used License Hours', width: 150 },
    { field: 'license_hours_work', headerName: 'Worki License Hours', width: 150 }
  );
}