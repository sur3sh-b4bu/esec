import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

export interface MatrixRow {
  s_no: number;
  user_id: string;
  computer: string;
  day_1: number;
  day_2: number;
  day_3: number;
  day_4: number;
  day_5: number;
  day_6: number;
  day_7: number;
  total_hours: number;
}

@Injectable()
export class LicenseUsageMatrixDataSource extends BaseDataSource<MatrixRow> {
  override procedure = 'esms_m.r_organization_usage_matrix';

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [];
  }
}
