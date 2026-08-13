import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationBundleDataSource } from './license-organization-bundle.ds';

@Injectable()
export class LicenseOrganizationBundleContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationBundleDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 }
  );
}
