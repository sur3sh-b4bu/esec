import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageMatrixDepartmentContext } from './license-organization-usage-matrix-department.context';
import { LicenseOrganizationUsageMatrixDepartmentDataSource } from './license-organization-usage-matrix-department.ds';
import * as Highcharts from 'highcharts';

export type MatrixViewMode = 'all' | 'total' | 'work' | 'lic_total' | 'lic_work';

@Component({
  selector: 'app-license-organization-usage-matrix-department',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent, FrameworkChartComponent],
  providers: [LicenseOrganizationUsageMatrixDepartmentContext, LicenseOrganizationUsageMatrixDepartmentDataSource],
  templateUrl: './license-organization-usage-matrix-department.component.html',
  styleUrl: './license-organization-usage-matrix-department.component.css'
})
export class LicenseOrganizationUsageMatrixDepartment {
  context = inject(LicenseOrganizationUsageMatrixDepartmentContext);
  ds = inject(LicenseOrganizationUsageMatrixDepartmentDataSource);
  readonly tab = input<LayoutTab>();

  readonly viewMode = signal<MatrixViewMode>('all');

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) {
        this.ds.selectedServer.set(currentTab.server);
      }
      if (currentTab.feature) {
        this.ds.selectedFeature.set(currentTab.feature);
      }
    }
  }

  setViewMode(mode: MatrixViewMode): void {
    this.viewMode.set(mode);
  }

  totalHoursChartOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent', height: 240 },
    title: { text: 'Total Hours', style: { fontSize: '14px', fontWeight: '600', color: '#1e293b' } },
    plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %' } } },
    series: [{
      type: 'pie',
      name: 'Total Hours',
      data: [
        { name: 'CHT-DEPT 1: 45.20 %', y: 45.20, color: '#10b981' },
        { name: 'ERSP-DEPT 2: 35.10 %', y: 35.10, color: '#ea580c' },
        { name: 'FRSP-DEPT 3: 12.50 %', y: 12.50, color: '#eab308' },
        { name: 'DC-DEPT 4: 7.20 %', y: 7.20, color: '#06b6d4' }
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
        { name: 'CHT-DEPT 1: 50.10 %', y: 50.10, color: '#10b981' },
        { name: 'ERSP-DEPT 2: 33.40 %', y: 33.40, color: '#ea580c' },
        { name: 'FRSP-DEPT 3: 16.50 %', y: 16.50, color: '#eab308' },
        { name: 'DC-DEPT 4: 0 %', y: 0.01, color: '#06b6d4' }
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
        { name: 'CHT-DEPT 1: 44.80 %', y: 44.80, color: '#10b981' },
        { name: 'ERSP-DEPT 2: 36.20 %', y: 36.20, color: '#ea580c' },
        { name: 'FRSP-DEPT 3: 12.10 %', y: 12.10, color: '#eab308' },
        { name: 'DC-DEPT 4: 6.90 %', y: 6.90, color: '#06b6d4' }
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
        { name: 'CHT-DEPT 1: 49.50 %', y: 49.50, color: '#10b981' },
        { name: 'ERSP-DEPT 2: 34.10 %', y: 34.10, color: '#ea580c' },
        { name: 'FRSP-DEPT 3: 16.40 %', y: 16.40, color: '#eab308' },
        { name: 'DC-DEPT 4: 0 %', y: 0.01, color: '#06b6d4' }
      ]
    }]
  };
}


