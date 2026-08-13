import { Injectable, signal } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class LicenseOrganizationIndicatorDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_indicator';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature()];
  }
}

@Injectable()
export class LicenseOrganizationChart30DataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_chart_30';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature()];
  }
}

@Injectable()
export class LicenseOrganizationChartWeekDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_chart_week';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature()];
  }
}

@Injectable()
export class LicenseOrganizationChartMonthDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_chart_month';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature()];
  }
}

@Injectable()
export class LicenseOrganizationChartYearDataSource extends BaseDataSource<any> {
  override procedure = 'esms_m.r_organization_chart_year';
  selectedServer = signal<string>('27005@MSILENGSAOLIC02');
  selectedFeature = signal<string>('MATLAB_Report_Gen');

  override buildParams(_filterService: FilterServiceGlobal): any[] {
    return [this.selectedServer(), this.selectedFeature()];
  }
}
