import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationReservationDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_reservation';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
