import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageMatrixGroupContext } from './license-organization-usage-matrix-group.context';
import { LicenseOrganizationUsageMatrixGroupDataSource } from './license-organization-usage-matrix-group.ds';
import * as Highcharts from 'highcharts';

export type MatrixViewMode = 'all' | 'total' | 'work' | 'lic_total' | 'lic_work';

@Component({
  selector: 'app-license-organization-usage-matrix-group',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent, FrameworkChartComponent],
  providers: [LicenseOrganizationUsageMatrixGroupContext, LicenseOrganizationUsageMatrixGroupDataSource],
  templateUrl: './license-organization-usage-matrix-group.component.html',
  styleUrl: './license-organization-usage-matrix-group.component.css'
})
export class LicenseOrganizationUsageMatrixGroup {
  context = inject(LicenseOrganizationUsageMatrixGroupContext);
  dataSource = inject(LicenseOrganizationUsageMatrixGroupDataSource);
  readonly tab = input<LayoutTab>();

  readonly viewMode = signal<MatrixViewMode>('all');

  setViewMode(mode: MatrixViewMode): void {
    this.viewMode.set(mode);
  }

  ngOnInit(): void {
    const currentTab = this.tab();
    if(currentTab?.server) {
      this.dataSource.selectedServer.set(currentTab.server);
    }
    if(currentTab?.feature) {
      this.dataSource.selectedFeature.set(currentTab.feature);
    }
  }

  totalHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Total Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' } } },
    series: [{
      type: 'pie',
      name: 'Total Hours',
      data: [
        { name: 'GROUP-A: 42.10 %', y: 42.10, color: '#10b981' },
        { name: 'GROUP-B: 37.80 %', y: 37.80, color: '#ea580c' },
        { name: 'GROUP-C: 13.10 %', y: 13.10, color: '#eab308' },
        { name: 'GROUP-D: 7.00 %', y: 7.00, color: '#06b6d4' }
      ]
    }]
  };

  workHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Work Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' } } },
    series: [{
      type: 'pie',
      name: 'Work Hours',
      data: [
        { name: 'GROUP-A: 47.30 %', y: 47.30, color: '#10b981' },
        { name: 'GROUP-B: 35.60 %', y: 35.60, color: '#ea580c' },
        { name: 'GROUP-C: 17.10 %', y: 17.10, color: '#eab308' },
        { name: 'GROUP-D: 0 %', y: 0.01, color: '#06b6d4' }
      ]
    }]
  };

  licTotalHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Total License Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' } } },
    series: [{
      type: 'pie',
      name: 'Total License Hours',
      data: [
        { name: 'GROUP-A: 43.10 %', y: 43.10, color: '#10b981' },
        { name: 'GROUP-B: 38.50 %', y: 38.50, color: '#ea580c' },
        { name: 'GROUP-C: 12.40 %', y: 12.40, color: '#eab308' },
        { name: 'GROUP-D: 6.00 %', y: 6.00, color: '#06b6d4' }
      ]
    }]
  };

  licWorkHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Work License Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' } } },
    series: [{
      type: 'pie',
      name: 'Work License Hours',
      data: [
        { name: 'GROUP-A: 48.00 %', y: 48.00, color: '#10b981' },
        { name: 'GROUP-B: 36.20 %', y: 36.20, color: '#ea580c' },
        { name: 'GROUP-C: 15.80 %', y: 15.80, color: '#eab308' },
        { name: 'GROUP-D: 0 %', y: 0.01, color: '#06b6d4' }
      ]
    }]
  };
}


