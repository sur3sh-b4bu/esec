import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { LicenseOrganizationRow } from './license-organization.model';

@Injectable()
export class LicenseOrganizationDataSource extends BaseDataSource<LicenseOrganizationRow> {
  override procedure = 'esms_m.r_organization_grid';
  override procedureParams = ['webtest123'];

  override buildParams(filterService: FilterServiceGlobal): any[] {
    return [ ...this.procedureParams, filterService.range(), filterService.feature()];
  }
}
