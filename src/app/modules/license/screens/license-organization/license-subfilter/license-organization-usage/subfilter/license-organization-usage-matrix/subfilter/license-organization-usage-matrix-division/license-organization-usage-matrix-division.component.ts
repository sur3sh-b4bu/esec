import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageMatrixDivisionContext } from './license-organization-usage-matrix-division.context';
import { LicenseOrganizationUsageMatrixDivisionDataSource } from './license-organization-usage-matrix-division.ds';
import * as Highcharts from 'highcharts';

export type MatrixViewMode = 'all' | 'total' | 'work' | 'lic_total' | 'lic_work';

@Component({
  selector: 'app-license-organization-usage-matrix-division',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent, FrameworkChartComponent],
  providers: [LicenseOrganizationUsageMatrixDivisionContext, LicenseOrganizationUsageMatrixDivisionDataSource],
  templateUrl: './license-organization-usage-matrix-division.component.html',
  styleUrl: './license-organization-usage-matrix-division.component.css'
})
export class LicenseOrganizationUsageMatrixDivision {
  context = inject(LicenseOrganizationUsageMatrixDivisionContext);
  ds = inject(LicenseOrganizationUsageMatrixDivisionDataSource);
  readonly tab = input<LayoutTab>();

  readonly viewMode = signal<MatrixViewMode>('all');

  setViewMode(mode: MatrixViewMode): void {
    this.viewMode.set(mode);
  }

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if(currentTab.server) this.ds.selectedServer.set(currentTab.server);
      if(currentTab.feature) this.ds.selectedFeature.set(currentTab.feature);
    }
  }
  
  totalHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Total Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' }
      }
    },
    series: [{
      type: 'pie',
      name: 'Total Hours',
      data: [
        { name: 'ERD-CHT: 41.03 %', y: 41.03, color: '#10b981' },
        { name: 'ERSP 4: 39.46 %', y: 39.46, color: '#ea580c' },
        { name: 'FRSP-5: 12.32 %', y: 12.32, color: '#eab308' },
        { name: 'ERD-DC: 7.18 %', y: 7.18, color: '#06b6d4' }
      ]
    }]
  };

  workHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Work Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' }
      }
    },
    series: [{
      type: 'pie',
      name: 'Work Hours',
      data: [
        { name: 'ERD-CHT: 46.43 %', y: 46.43, color: '#10b981' },
        { name: 'ERSP 4: 37.54 %', y: 37.54, color: '#ea580c' },
        { name: 'FRSP-5: 16.03 %', y: 16.03, color: '#eab308' },
        { name: 'ERD-DC: 0 %', y: 0.01, color: '#06b6d4' }
      ]
    }]
  };

  licTotalHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Total License Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' }
      }
    },
    series: [{
      type: 'pie',
      name: 'Total License Hours',
      data: [
        { name: 'ERD-CHT: 41.36 %', y: 41.36, color: '#10b981' },
        { name: 'ERSP 4: 41.2 %', y: 41.20, color: '#ea580c' },
        { name: 'FRSP-5: 11.02 %', y: 11.02, color: '#eab308' },
        { name: 'ERD-DC: 6.42 %', y: 6.42, color: '#06b6d4' }
      ]
    }]
  };

  licWorkHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Work License Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' }
      }
    },
    series: [{
      type: 'pie',
      name: 'Work License Hours',
      data: [
        { name: 'ERD-CHT: 47.56 %', y: 47.56, color: '#10b981' },
        { name: 'ERSP 4: 38.12 %', y: 38.12, color: '#ea580c' },
        { name: 'FRSP-5: 14.33 %', y: 14.33, color: '#eab308' },
        { name: 'ERD-DC: 0 %', y: 0.01, color: '#06b6d4' }
      ]
    }]
  };
}
