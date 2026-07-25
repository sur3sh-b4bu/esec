import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { BaseDataSource } from '@framework/datasource';

class GenericDataSource extends BaseDataSource<any> {
  procedure: string;
  constructor(procedure: string) {
    super();
    this.procedure = procedure;
    this.procedureParams = ['webtest123'];
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminAccessControlContext {
  filterService = inject(FilterServiceGlobal);

  columns = gridColumns(
    { field: 'sw', width: 150 },
    { field: 'server', width: 150 },
    { field: 'location', width: 150 },
    { field: 'lic', width: 150 },
    { field: 'lic_name', width: 150 },
    'l_qty_i',
    'l_qty_r',
    'max_qty_i',
    'qty_r',
    'status'
  );

  orgContext: GridContext<any> = {
    columns: this.columns,
    dataSource: new GenericDataSource('organization_grid'),
    filterService: this.filterService
  };

  usersContext: GridContext<any> = {
    columns: this.columns,
    dataSource: new GenericDataSource('users_grid'),
    filterService: this.filterService
  };

  rolesContext: GridContext<any> = {
    columns: this.columns,
    dataSource: new GenericDataSource('roles_grid'),
    filterService: this.filterService
  };
}
