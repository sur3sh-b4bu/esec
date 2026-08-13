import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';
import { formatDateForMySQL } from '@shared/utils/date-format.utils';

export interface CheckoutUserRow {
  s_no?: number;
  user_id: string;
  cluster: string;
  version: string;
  computer: string;
  c_date: string;
  start_time: string;
  duration: string;
  denial_code?: string;
  status?: string;
}

@Injectable()
export class LicenseOrganizationCheckoutUserDataSource extends BaseDataSource<CheckoutUserRow> {
  override procedure = 'esms_m.r_organization_users_checkout_list_date';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('27005@MSILENGSAOLIC02');
  selectedFeature = signal('MATLAB_Report_Gen');
  viewMode = signal<'date' | 'time'>('date');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    const start = formatDateForMySQL(this.statusBarService?.startDate?.(), '2025-08-15');
    const end = formatDateForMySQL(this.statusBarService?.endDate?.(), '2026-08-09');

    return [
      this.selectedServer(),
      this.selectedFeature(),
      start,
      end
    ];
  }
}
