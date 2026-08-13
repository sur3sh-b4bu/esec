import { Injectable, signal, inject } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationDepartmentDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_groups_department_grid';
  selectedServer = signal<string>('');
  selectedFeature = signal<string>('');
  filterService = inject(FilterServiceGlobal);

  override buildParams(): any[] {
    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.filterService.range()
    ];
  }
}
