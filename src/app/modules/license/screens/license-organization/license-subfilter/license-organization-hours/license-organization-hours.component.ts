import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent, ChartContext } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationHoursContext } from './license-organization-hours.context';
import { LicenseOrganizationHoursDataSource } from './license-organization-hours.ds';
import 'highcharts/highcharts-3d';

@Component({
  selector: 'app-license-organization-hours',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent, FrameworkChartComponent],
  providers: [LicenseOrganizationHoursContext, LicenseOrganizationHoursDataSource],
  templateUrl: './license-organization-hours.component.html',
  styleUrl: './license-organization-hours.component.css'
})

export class LicenseOrganizationHours {
  context = inject(LicenseOrganizationHoursContext);
  readonly tab = input<LayoutTab>();

  chart: ChartContext<any> = {
    dataSource: inject(LicenseOrganizationHoursDataSource),
    filterService: this.context.filterService,
    title: 'Product License Hours',
    plotType: 'value',
    yAxisTitle: 'License Hours',
    xAxisField: 'month',
    seriesSpecs: (data: any[]) => [
      {
        type: 'line',
        name: 'License Hours',
        data: data.map((item) => item.license_hours),
        tooltip: {
          valueSuffix: ' License Hours'
        }
      },
      {
        type: 'column',
        name: 'License Hours Used',
        data: data.map((item) => item.license_hours_used),
        tooltip: {
          valueSuffix: ' License Hours Used'
        }
      },
      {
        type: 'column',
        name: 'License Hours Work',
        data: data.map((item) => item.license_hours_work),
        tooltip: {
          valueSuffix: ' License Hours Work'
        },
        color: '#ff5722'
      }
    ],
    extraOptions: {
      chart: {
        backgroundColor: 'transparent',
        style: { fontFamily: 'Inter, system-ui, sans-serif' },
        spacingTop: 6,
        spacingBottom: 8,
        spacingLeft: 6,
        spacingRight: 10,
        crosshair: {
          enabled: true,
        }
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'bottom'
      }
    }
  }
}
