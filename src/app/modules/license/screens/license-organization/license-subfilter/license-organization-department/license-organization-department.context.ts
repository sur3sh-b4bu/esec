import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationDepartmentDataSource } from './license-organization-department.ds';

@Injectable()
export class LicenseOrganizationDepartmentContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationDepartmentDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 }
  );
}
