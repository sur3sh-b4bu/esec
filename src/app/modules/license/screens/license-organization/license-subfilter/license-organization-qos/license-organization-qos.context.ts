import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationQosDataSource } from './license-organization-qos.ds';

@Injectable()
export class LicenseOrganizationQosContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationQosDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 }
  );
}
