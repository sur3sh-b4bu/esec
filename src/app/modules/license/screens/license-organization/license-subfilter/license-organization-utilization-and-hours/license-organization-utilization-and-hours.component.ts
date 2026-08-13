import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUtilizationAndHoursContext } from './license-organization-utilization-and-hours.context';
import { LicenseOrganizationUtilizationAndHoursDataSource } from './license-organization-utilization-and-hours.ds';
import * as Highcharts from 'highcharts';

export type ViewPeriodMode = 'month' | 'date';
export type GroupCategoryMode = 'Division' | 'Department' | 'Group';

@Component({
  selector: 'app-license-organization-utilization-and-hours',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent, FrameworkChartComponent],
  providers: [LicenseOrganizationUtilizationAndHoursContext, LicenseOrganizationUtilizationAndHoursDataSource],
  templateUrl: './license-organization-utilization-and-hours.component.html',
  styleUrl: './license-organization-utilization-and-hours.component.css'
})
export class LicenseOrganizationUtilizationAndHours {
  context = inject(LicenseOrganizationUtilizationAndHoursContext);
  readonly tab = input<LayoutTab>();

  readonly periodMode = signal<ViewPeriodMode>('month');
  readonly hoursMode = signal<'24' | 'working'>('24');
  readonly workingDays = signal<boolean>(false);
  readonly newCalculation = signal<boolean>(false);
  readonly showMonthDays = signal<boolean>(false);
  readonly groupCategory = signal<GroupCategoryMode>('Division');

  setPeriodMode(mode: ViewPeriodMode): void {
    this.periodMode.set(mode);
    this.context.dataSource.periodMode.set(mode);
  }

  setGroupCategory(cat: GroupCategoryMode): void {
    this.groupCategory.set(cat);
  }

  toggleWorkingDays(): void {
    this.workingDays.set(!this.workingDays());
    this.context.dataSource.workingDays.set(this.workingDays() ? 'Y' : 'N');
  }

  // Dual Y-Axis Highcharts Chart Options matching screenshot
  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      height: 380,
      style: { fontFamily: 'Inter, system-ui, sans-serif' }
    },
    title: { text: '' },
    xAxis: {
      categories: ['Sep-2025', 'Oct-2025', 'Nov-2025', 'Dec-2025', 'Jan-2026', 'Feb-2026', 'Mar-2026', 'Apr-2026', 'May-2026', 'Jun-2026', 'Jul-2026', 'Aug-2026'],
      labels: { style: { color: '#64748b', fontSize: '11px' } }
    },
    yAxis: [
      {
        title: { text: 'Hours', style: { color: '#64748b' } },
        labels: {
          formatter: function() {
            const val = Number(this.value);
            return val >= 1000 ? (val / 1000).toFixed(1) + ' K' : val.toString();
          },
          style: { color: '#64748b' }
        },
        min: 0,
        max: 6000
      },
      {
        title: { text: 'Percentage', style: { color: '#64748b' } },
        labels: { format: '{value}%', style: { color: '#64748b' } },
        opposite: true,
        min: 0,
        max: 100,
        tickInterval: 10
      }
    ],
    tooltip: { shared: true },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { fontSize: '11px', fontWeight: '500', color: '#334155' }
    },
    series: [
      {
        type: 'column',
        name: 'Utilized Hours',
        yAxis: 0,
        data: [15.26, 8.26, 26.15, 11.94, 11.97, 0, 0, 0, 0, 0, 0, 0],
        color: '#06b6d4'
      },
      {
        type: 'line',
        name: 'Utilized Hours (%)',
        yAxis: 1,
        data: [0.4, 0.4, 0.4, 0.4, 0.4, 0, 0, 0, 0, 0, 0, 0],
        color: '#f97316'
      },
      {
        type: 'line',
        name: 'Work Peak (%)',
        yAxis: 1,
        data: [28.58, 28.58, 28.58, 28.58, 28.58, 0, 0, 0, 0, 0, 0, 0],
        color: '#94a3b8'
      },
      {
        type: 'line',
        name: 'Day Peak (%)',
        yAxis: 1,
        data: [28.58, 28.58, 28.58, 28.58, 28.58, 0, 0, 0, 0, 0, 0, 0],
        color: '#cbd5e1'
      },
      {
        type: 'line',
        name: 'Available Hours',
        yAxis: 0,
        data: [
          { y: 720, dataLabels: { enabled: true, format: '720' } },
          { y: 744, dataLabels: { enabled: true, format: '744' } },
          { y: 2400, dataLabels: { enabled: true, format: '2.4 K' } },
          { y: 5200, dataLabels: { enabled: true, format: '5.2 K' } },
          { y: 4200, dataLabels: { enabled: true, format: '4.2 K' } },
          { y: 0, dataLabels: { enabled: true, format: '0' } },
          0, 0, 0, 0, 0, 0
        ],
        color: '#2563eb',
        marker: { enabled: true, symbol: 'circle', radius: 4 }
      }
    ]
  };
}
