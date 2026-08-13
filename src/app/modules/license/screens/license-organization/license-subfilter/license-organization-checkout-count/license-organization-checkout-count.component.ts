import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkChartComponent } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationCheckoutCountContext } from './license-organization-checkout-count.context';
import { LicenseOrganizationCheckoutCountDataSource } from './license-organization-checkout-count.ds';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-license-organization-checkout-count',
  standalone: true,
  imports: [CommonModule, FrameworkChartComponent],
  providers: [LicenseOrganizationCheckoutCountContext, LicenseOrganizationCheckoutCountDataSource],
  templateUrl: './license-organization-checkout-count.component.html',
  styleUrl: './license-organization-checkout-count.component.css'
})
export class LicenseOrganizationCheckoutCount {
  context = inject(LicenseOrganizationCheckoutCountContext);
  readonly tab = input<LayoutTab>();

  readonly workingDays = signal<boolean>(false);

  toggleWorkingDays(): void {
    this.workingDays.set(!this.workingDays());
  }

  // Dual Y-Axis Highcharts Chart Options matching screenshot
  chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      height: 480,
      style: { fontFamily: 'Inter, system-ui, sans-serif' }
    },
    title: { text: '' },
    xAxis: {
      categories: [
        '15-Aug-2025', '20-Aug-2025', '25-Aug-2025', '30-Aug-2025', '04-Sep-2025', '09-Sep-2025',
        '14-Sep-2025', '19-Sep-2025', '24-Sep-2025', '29-Sep-2025', '04-Oct-2025', '09-Oct-2025',
        '14-Oct-2025', '19-Oct-2025', '24-Oct-2025', '29-Oct-2025', '03-Nov-2025', '08-Nov-2025',
        '13-Nov-2025', '18-Nov-2025', '23-Nov-2025', '28-Nov-2025', '03-Dec-2025', '08-Dec-2025',
        '13-Dec-2025', '18-Dec-2025', '23-Dec-2025', '28-Dec-2025', '02-Jan-2026', '07-Jan-2026',
        '12-Jan-2026', '17-Jan-2026', '22-Jan-2026', '27-Jan-2026', '01-Feb-2026', '06-Feb-2026',
        '11-Feb-2026', '16-Feb-2026', '21-Feb-2026', '26-Feb-2026', '03-Mar-2026', '08-Mar-2026',
        '13-Mar-2026', '18-Mar-2026', '23-Mar-2026', '28-Mar-2026', '02-Apr-2026', '07-Apr-2026',
        '12-Apr-2026', '17-Apr-2026', '22-Apr-2026', '27-Apr-2026', '02-May-2026', '07-May-2026',
        '12-May-2026', '17-May-2026', '22-May-2026', '27-May-2026', '01-Jun-2026', '06-Jun-2026',
        '11-Jun-2026', '16-Jun-2026', '21-Jun-2026', '26-Jun-2026', '01-Jul-2026', '06-Jul-2026',
        '11-Jul-2026', '16-Jul-2026', '21-Jul-2026', '26-Jul-2026', '31-Jul-2026', '05-Aug-2026'
      ],
      labels: {
        rotation: -45,
        style: { fontSize: '10px' },
        formatter: function() {
          const text = String(this.value);
          if (text.includes('Sat') || text.includes('Sun') || text.includes('30-Aug') || text.includes('04-Oct') || text.includes('08-Nov') || text.includes('13-Dec') || text.includes('17-Jan') || text.includes('21-Feb') || text.includes('28-Mar') || text.includes('02-May') || text.includes('06-Jun') || text.includes('11-Jul')) {
            return `<span style="color:#ef4444; font-weight:600;">${text}</span>`;
          }
          return `<span style="color:#64748b;">${text}</span>`;
        }
      }
    },
    yAxis: [
      {
        title: { text: 'Issued', style: { color: '#64748b' } },
        min: 0,
        max: 8,
        tickInterval: 1
      },
      {
        title: { text: 'Checkout Count', style: { color: '#64748b' } },
        opposite: true,
        min: 0,
        max: 3.2,
        tickInterval: 0.4
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
        type: 'line',
        name: 'Issued',
        yAxis: 0,
        data: [
          { y: 1, dataLabels: { enabled: true, format: '1' } },
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          { y: 7, dataLabels: { enabled: true, format: '7' } },
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          { y: 0, dataLabels: { enabled: true, format: '0' } },
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        color: '#8b5cf6',
        step: 'left',
        marker: { enabled: false }
      },
      {
        type: 'column',
        name: 'Count',
        yAxis: 1,
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          { y: 3, dataLabels: { enabled: true, format: '3' } },
          0, 0, 0, 0, 0,
          { y: 2, dataLabels: { enabled: true, format: '2' } },
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        color: '#a78bfa',
        pointWidth: 2
      }
    ]
  };
}
