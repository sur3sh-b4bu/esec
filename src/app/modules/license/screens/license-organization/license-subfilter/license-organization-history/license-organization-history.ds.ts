import { Injectable, signal, inject } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationHistoryDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_history';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');
  workingDays = signal<string>('Y');
  reduction = signal<string>('1');
  statusbarService = inject(StatusBarService);

  override buildParams(_filterService?: FilterServiceGlobal): any[] {
    const startD = this.formatDate(this.statusbarService.startDate() || '2025-08-15');
    const endD = this.formatDate(this.statusbarService.endDate() || '2026-08-09');
    return [
      this.selectedServer(),
      this.selectedFeature(),
      startD,
      endD,
      this.workingDays(),
      this.reduction()
    ];
  }

  private formatDate(dStr: string): string {
    if (!dStr) return '';
    const monthMap: Record<string, string> = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };

    if (dStr.includes('-')) {
      const parts = dStr.split('-');
      if (parts[0].length === 4) return dStr;
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const monthStr = parts[1].toLowerCase();
        const month = monthMap[monthStr] || (isNaN(Number(parts[1])) ? '08' : parts[1].padStart(2, '0'));
        const year = parts[2];
        return `${year}-${month}-${day}`;
      }
    }
    return dStr;
  }
}

@Injectable()
export class LicenseOrganizationHistoryDataSource1 extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_history_1';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');
  workingDays = signal<string>('Y');
  statusbarService = inject(StatusBarService);

  override buildParams(_filterService?: FilterServiceGlobal): any[] {
    const startD = this.formatDate(this.statusbarService.startDate() || '2025-08-15');
    const endD = this.formatDate(this.statusbarService.endDate() || '2026-08-09');
    return [
      this.selectedServer(),
      this.selectedFeature(),
      startD,
      endD,
      this.workingDays()
    ];
  }

  private formatDate(dStr: string): string {
    if (!dStr) return '';
    const monthMap: Record<string, string> = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };

    if (dStr.includes('-')) {
      const parts = dStr.split('-');
      if (parts[0].length === 4) return dStr;
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const monthStr = parts[1].toLowerCase();
        const month = monthMap[monthStr] || (isNaN(Number(parts[1])) ? '08' : parts[1].padStart(2, '0'));
        const year = parts[2];
        return `${year}-${month}-${day}`;
      }
    }
    return dStr;
  }
}

