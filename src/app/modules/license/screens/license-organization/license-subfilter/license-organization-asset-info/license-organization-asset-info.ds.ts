import { Injectable, inject, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';
import { formatDateForMySQL } from '@shared/utils/date-format.utils';

export interface AssetInfoRow {
  s_no?: number;
  user_id: string;
  cluster: string;
  version: string;
  computer: string;
  asset_tag?: string;
  ip_address?: string;
  mac_address?: string;
  department?: string;
  division?: string;
  group_name?: string;
}

@Injectable()
export class LicenseOrganizationAssetInfoDataSource extends BaseDataSource<AssetInfoRow> {
  override procedure = 'esms_m.r_organization_utilization_asset_info';
  statusBarService = inject(StatusBarService);

  selectedServer = signal('27005@MSILENGSAOLIC02');
  workingDays = signal('Y');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    const start = formatDateForMySQL(this.statusBarService?.startDate?.(), '2021-02-01');
    const end = formatDateForMySQL(this.statusBarService?.endDate?.(), '2026-08-09');

    return [
      this.selectedServer(),
      start,
      end,
      '',
      this.workingDays()
    ];
  }
}
