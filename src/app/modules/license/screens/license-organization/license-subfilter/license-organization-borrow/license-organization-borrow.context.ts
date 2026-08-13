import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationBorrowDataSource } from './license-organization-borrow.ds';

@Injectable()
export class LicenseOrganizationBorrowContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationBorrowDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns = gridColumns(
    { field: 'sw', headerName: 'Software', width: 150 },
    { field: 'server', headerName: 'Server', width: 220 },
    { field: 'lic_name', headerName: 'Feature', width: 200 }
  );
}
