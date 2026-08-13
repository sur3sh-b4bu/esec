import { Injectable, inject,signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationMonthDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_month';
  statusBarService = inject(StatusBarService);
  selectedServer = signal('')
  selectedFeature = signal('')

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature(), this.statusBarService.startDate().split('-').reverse().join('-'), this.statusBarService.endDate().split('-').reverse().join('-'), '11', 'Y'];
  }
}
