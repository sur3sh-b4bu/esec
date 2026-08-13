import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationBorrowDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_borrow';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
