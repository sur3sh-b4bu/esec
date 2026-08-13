import { Component, inject, viewChild, input, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkChartComponent, ChartContext } from '@framework/chart';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { StatusBarService } from '@core/services/statusbar.service';
import { LicenseOrganizationQosContext } from './license-organization-qos.context';
import {
  LicenseOrganizationQosDataSource,
  LicenseOrganizationQosDataSource1
} from './license-organization-qos.ds';

@Component({
  selector: 'app-license-organization-qos',
  standalone: true,
  imports: [CommonModule, FrameworkChartComponent, FrameworkGridComponent],
  providers: [
    LicenseOrganizationQosContext,
    LicenseOrganizationQosDataSource,
    LicenseOrganizationQosDataSource1
  ],
  templateUrl: './license-organization-qos.component.html',
  styleUrl: './license-organization-qos.component.css'
})
export class LicenseOrganizationQos implements OnInit {
  context = inject(LicenseOrganizationQosContext);
  ds = inject(LicenseOrganizationQosDataSource);
  ds1 = inject(LicenseOrganizationQosDataSource1);
  statusbarService = inject(StatusBarService);

  readonly tab = input<LayoutTab>();
  readonly frameworkChart = viewChild(FrameworkChartComponent);

  readonly server = signal<string>('27005@MSILENGSAOLIC02');
  readonly feature = signal<string>('MATLAB_Report_Gen');
  readonly software = signal<string>('Matlab');
  readonly startDate = signal<string>('15-Aug-2025');
  readonly endDate = signal<string>('09-Aug-2026');

  readonly scaleMode = signal<'linear' | 'actual'>('linear');
  readonly groupType = signal<string>('date');
  readonly hoursMode = signal<string>('24');
  readonly showWorkingDays = signal<boolean>(false);

  readonly reductionVal = signal<string>('1');
  readonly percentageVal = signal<number>(90);
  readonly showHoursPerDay = signal<boolean>(false);
  readonly showChart = signal<boolean>(true);

  readonly totalDays = signal<number>(195);
  readonly unusedDays = signal<number>(174);
  readonly qosStatus = signal<string>('QOS not achievable');
  readonly lastIssued = signal<number>(7);

  readonly chartContext: ChartContext<any> = {
    dataSource: this.ds,
    filterService: this.context.filterService,
    xAxisField: 'lic_used',
    xAxisTitle: 'License Used',
    yAxisTitle: 'Percentage',
    seriesSpecs: [
      {
        key: 'PCT',
        type: 'column',
        name: 'Percentage',
        field: (r) => r.pct ?? r.percentage ?? r.p_val ?? 10.8,
        color: '#2ec4b6',
        extra: { pointPlacement: 'on' }
      },
      {
        key: 'DAYS',
        type: 'line',
        name: 'Days Used',
        field: (r) => r.days ?? r.w_days ?? 0,
        color: '#64748b',
        marker: { enabled: true, symbol: 'diamond', radius: 4 }
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
      }
    }
  };

  constructor() {
    effect(() => {
      const gType = this.groupType();
      const hMode = this.hoursMode();
      const wDays = this.showWorkingDays() ? 'Y' : 'N';
      const red = this.reductionVal() || '1';

      this.ds.selectedServer.set(this.server());
      this.ds.selectedFeature.set(this.feature());
      this.ds.groupType.set(gType);
      this.ds.hoursMode.set(hMode);
      this.ds.workingDays.set(wDays);
      this.ds.reduction.set(red);

      this.ds1.selectedServer.set(this.server());
      this.ds1.selectedFeature.set(this.feature());
      this.ds1.hoursMode.set(hMode);
      this.ds1.workingDays.set(wDays);
      this.ds1.reduction.set(red);

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

  onGroupTypeChange(val: string): void {
    this.groupType.set(val);
  }

  onHoursModeChange(val: string): void {
    this.hoursMode.set(val);
  }

  toggleWorkingDays(): void {
    this.showWorkingDays.set(!this.showWorkingDays());
  }

  onReductionChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.reductionVal.set(val);
  }

  onPercentageChange(event: Event): void {
    const val = Number((event.target as HTMLInputElement).value) || 90;
    this.percentageVal.set(val);
  }

  toggleViewMode(): void {
    this.showChart.set(!this.showChart());
  }
}
