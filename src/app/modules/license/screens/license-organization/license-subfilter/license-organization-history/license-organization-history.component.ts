import { Component, inject, viewChild, input, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkChartComponent, ChartContext } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { StatusBarService } from '@core/services/statusbar.service';
import {
  LicenseOrganizationHistoryContext,
  LicenseOrganizationHistoryContext1
} from './license-organization-history.context';
import {
  LicenseOrganizationHistoryDataSource,
  LicenseOrganizationHistoryDataSource1
} from './license-organization-history.ds';

@Component({
  selector: 'app-license-organization-history',
  standalone: true,
  imports: [CommonModule, FrameworkChartComponent],
  providers: [
    LicenseOrganizationHistoryContext,
    LicenseOrganizationHistoryDataSource,
    LicenseOrganizationHistoryContext1,
    LicenseOrganizationHistoryDataSource1
  ],
  templateUrl: './license-organization-history.component.html',
  styleUrl: './license-organization-history.component.css'
})
export class LicenseOrganizationHistory implements OnInit {
  context = inject(LicenseOrganizationHistoryContext);
  context1 = inject(LicenseOrganizationHistoryContext1);
  ds = inject(LicenseOrganizationHistoryDataSource);
  ds1 = inject(LicenseOrganizationHistoryDataSource1);
  statusbarService = inject(StatusBarService);

  readonly tab = input<LayoutTab>();
  readonly frameworkChart = viewChild(FrameworkChartComponent);

  readonly server = signal<string>('27005@MSILENGSAOLIC02');
  readonly feature = signal<string>('MATLAB_Report_Gen');
  readonly software = signal<string>('Matlab');
  readonly startDate = signal<string>('15-Aug-2025');
  readonly endDate = signal<string>('09-Aug-2026');

  readonly showWorkingDays = signal<boolean>(false);
  readonly reductionVal = signal<string>('1');
  readonly percentileVal = signal<number>(100);

  readonly xAxisCount = signal<number>(2);
  readonly totalDataPoints = signal<string>('54.561 K');
  readonly utilizedPoints = signal<number>(433);
  readonly percentage100 = signal<number>(0.79);
  readonly lastIssued = signal<number>(7);

  readonly chartContext: ChartContext<any> = {
    dataSource: this.ds1,
    filterService: this.context.filterService,
    xAxisField: 'w_days',
    xAxisTitle: 'Days Used',
    yAxisTitle: 'License Used',
    seriesSpecs: [
      {
        key: 'USED',
        type: 'column',
        name: 'License Used',
        field: (r) => r.qty_u ?? r.license_used ?? r.qty ?? r.Qty ?? 1,
        color: '#2ec4b6',
        yAxis: 0,
        extra: { pointPlacement: 'on' }
      },
      {
        key: 'ISSUED',
        type: 'line',
        name: 'Issued',
        field: (r) => r.qty_i ?? r.issued ?? 7,
        color: '#800080',
        yAxis: 0,
        marker: { enabled: true, symbol: 'circle', radius: 4 }
      },
      {
        key: 'PERCENTILE_DAYS',
        type: 'line',
        name: 'Percentile (Based on Days)',
        field: (r) => r.p_days ?? r.percentile_days ?? 50,
        color: '#ea580c',
        yAxis: 1,
        marker: { enabled: true, symbol: 'diamond', radius: 4 }
      },
      {
        key: 'PERCENTILE_TARGET',
        type: 'line',
        name: 'Percentile(100) => 1 License(s) used in 21 Day(s)',
        field: (r) => r.p_target ?? 1,
        color: '#2563eb',
        yAxis: 0,
        marker: { enabled: false }
      }
    ],
    extraOptions: {
      legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '10px', fontWeight: '500', color: '#334155' }
      },
      xAxis: {
        labels: {
          rotation: 0
        }
      },
      yAxis: [
        {
          title: { text: 'License Used', style: { color: '#64748b', fontSize: '10px' } },
          labels: { format: '{value}', style: { color: '#475569', fontSize: '10px' } },
          gridLineWidth: 1,
          gridLineColor: '#e6e6e6ff'
        },
        {
          title: { text: 'Percentile', style: { color: '#64748b', fontSize: '10px' } },
          labels: { format: '{value}', style: { color: '#475569', fontSize: '10px' } },
          opposite: true,
          min: 0,
          max: 100,
          gridLineWidth: 0
        }
      ]
    }
  };

  constructor() {
    effect(() => {
      const wDays = this.showWorkingDays() ? 'Y' : 'N';
      const red = this.reductionVal() || '1';

      this.ds.workingDays.set(wDays);
      this.ds.reduction.set(red);
      this.ds.selectedServer.set(this.server());
      this.ds.selectedFeature.set(this.feature());

      this.ds1.workingDays.set(wDays);
      this.ds1.selectedServer.set(this.server());
      this.ds1.selectedFeature.set(this.feature());

      setTimeout(() => this.frameworkChart()?.renderChart(), 0);
    });
  }

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) this.server.set(currentTab.server);
      if (currentTab.feature) this.feature.set(currentTab.feature);
      if (currentTab.software) this.software.set(currentTab.software);
    }

    if (this.statusbarService) {
      if (this.statusbarService.startDate?.()) {
        this.startDate.set(this.statusbarService.startDate());
      }
      if (this.statusbarService.endDate?.()) {
        this.endDate.set(this.statusbarService.endDate());
      }
    }
  }

  toggleWorkingDays(): void {
    this.showWorkingDays.set(!this.showWorkingDays());
  }

  onReductionChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.reductionVal.set(val);
  }

  onPercentileChange(event: Event): void {
    const val = Number((event.target as HTMLInputElement).value) || 100;
    this.percentileVal.set(val);
  }
}
