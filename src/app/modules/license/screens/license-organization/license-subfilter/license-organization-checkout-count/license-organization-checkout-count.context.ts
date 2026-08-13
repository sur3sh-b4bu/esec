import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationCheckoutCountDataSource } from './license-organization-checkout-count.ds';

@Injectable()
export class LicenseOrganizationCheckoutCountContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationCheckoutCountDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 }
  );
}
