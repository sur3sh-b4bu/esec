import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { LicenseOrganizationRow } from './license-organization.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseOrganizationDataSource extends BaseDataSource<LicenseOrganizationRow> {
  override procedure = 'organization_grid';
  override procedureParams = ['webtest123'];

  override buildParams(filterService: FilterServiceGlobal): any[] {
    return ['tuty', filterService.range(), 'All'];
  }
}
