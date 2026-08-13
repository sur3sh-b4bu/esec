import { Injectable, signal, inject } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationHeatmapDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_utilization_hour';

  selectedServer = signal<string>('');
  selectedFeature = signal<string>('');
  statusbarService = inject(StatusBarService);

  override buildParams(_filterService?: FilterServiceGlobal): any[] {
    return [
      this.selectedServer(),
      this.selectedFeature(),
      this.statusbarService.startDate().split('-').reverse().join('-'),
      this.statusbarService.endDate().split('-').reverse().join('-')
    ];
  }

  override processResponse(rawArray: any[]): any[] {
    let list: any[] = [];
    if (Array.isArray(rawArray)) list = rawArray;
    else if (rawArray && Array.isArray((rawArray as any).message)) list = (rawArray as any).message;
    else if (rawArray && Array.isArray((rawArray as any).data)) list = (rawArray as any).data;

    if (!list || list.length === 0) return [];

    if (list[0].h0_qty_p !== undefined || list[0].h0 !== undefined) {
      return list;
    }

    const rowMap = new Map<string, any>();
    for (const item of list) {
      const dateStr = item.c_date || item.date || item.Date || item.d || item.dt || '';
      if (!dateStr) continue;

      if (!rowMap.has(dateStr)) {
        const rowObj: any = { c_date: dateStr };
        for (let h = 0; h < 24; h++) {
          rowObj[`h${h}_qty_p`] = 0;
          rowObj[`h${h}_qty_i`] = 0;
          rowObj[`h${h}_p_qty_p`] = 0;
        }
        rowMap.set(dateStr, rowObj);
      }

      const row = rowMap.get(dateStr)!;
      const hour = Number(item.c_hour ?? item.hour ?? item.h ?? 0);
      if (hour >= 0 && hour < 24) {
        row[`h${hour}_qty_p`] = Number(item.qty_p ?? item.used ?? item.u ?? 0);
        row[`h${hour}_qty_i`] = Number(item.qty_i ?? item.issued ?? item.i ?? 0);
        row[`h${hour}_p_qty_p`] = Number(item.p_qty_p ?? item.pct ?? 0);
      }
    }

    return Array.from(rowMap.values());
  }
}
