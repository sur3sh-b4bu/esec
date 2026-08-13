import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationHoursDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_usage_month';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return ['27005@MSILENGSAOLIC02', 'MATLAB_Report_Gen','2025-08-14','2026-08-08','11.5', 'Y'];
  }
}


//call esms_m.r_()

//call esms_m.r_organization_usage_date('27005@MSILENGSAOLIC02', 'MATLAB_Report_Gen','2025-08-14','2026-08-08','11.5')