import { Component, inject, input, signal, viewChild, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkChartComponent, ChartContext } from '@framework/chart';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { LicenseOrganizationUtilizationContext } from './license-organization-utilization.context';
import { LicenseOrganizationUtilizationDataSource } from './license-organization-utilization.ds';

@Component({
  selector: 'app-license-organization-utilization',
  standalone: true,
  imports: [CommonModule, FrameworkChartComponent],
  providers: [LicenseOrganizationUtilizationContext, LicenseOrganizationUtilizationDataSource],
  templateUrl: './license-organization-utilization.component.html',
  styleUrl: './license-organization-utilization.component.css'
})
export class LicenseOrganizationUtilization implements OnInit {
  readonly tab = input<LayoutTab>();

  readonly context = inject(LicenseOrganizationUtilizationContext);
  readonly filterService = inject(FilterServiceGlobal);

  readonly frameworkChart = viewChild(FrameworkChartComponent);

  readonly server = signal<string>('27005@MSILENGSAOLIC02');
  readonly feature = signal<string>('MATLAB_Report_Gen');
  readonly software = signal<string>('Matlab');

  readonly plotType = signal<'value' | 'percentage'>('value');
  readonly showDP = signal<boolean>(true);
  readonly showDA = signal<boolean>(false);
  readonly showDPM = signal<boolean>(false);
  readonly showDAM = signal<boolean>(false);
  readonly showWP = signal<boolean>(true);
  readonly showWA = signal<boolean>(false);
  readonly showWPM = signal<boolean>(false);
  readonly showWAM = signal<boolean>(false);
  readonly showIssued = signal<boolean>(true);

  readonly chartContext: ChartContext<any> = {
    dataSource: inject(LicenseOrganizationUtilizationDataSource),
    filterService: this.filterService,
    xAxisField: 'date',
    seriesSpecs: [
      { key: 'DP', type: 'column', name: (isVal) => isVal ? 'Day Peak (DP)' : '% DP', field: (r, isVal) => isVal ? r.qty_dp : r.p_dp, color: '#0066cc', visible: () => this.showDP() },
      { key: 'DA', type: 'column', name: (isVal) => isVal ? 'Day Avg (DA)' : '% DA', field: (r, isVal) => isVal ? r.qty_da : r.p_da, color: '#475569', visible: () => this.showDA() },
      { key: 'DPM', type: 'column', name: (isVal) => isVal ? 'Day Peak Mean (DPM)' : '% DPM', field: (r, isVal) => isVal ? r.qty_dpm : r.p_dpm, color: '#f59e0b', visible: () => this.showDPM() },
      { key: 'DAM', type: 'column', name: (isVal) => isVal ? 'Day Avg Mean (DAM)' : '% DAM', field: (r, isVal) => isVal ? r.qty_dam : r.p_dam, color: '#10b981', visible: () => this.showDAM() },
      { key: 'WP', type: 'column', name: (isVal) => isVal ? 'Work Peak (WP)' : '% WP', field: (r, isVal) => isVal ? r.qty_wp : r.p_wp, color: '#ef4444', visible: () => this.showWP() },
      { key: 'WA', type: 'column', name: (isVal) => isVal ? 'Work Avg (WA)' : '% WA', field: (r, isVal) => isVal ? r.qty_wa : r.p_wa, color: '#8b5cf6', visible: () => this.showWA() },
      { key: 'WPM', type: 'column', name: (isVal) => isVal ? 'Work Peak Mean (WPM)' : '% WPM', field: (r, isVal) => isVal ? r.qty_wpm : r.p_wpm, color: '#ec4899', visible: () => this.showWPM() },
      { key: 'WAM', type: 'column', name: (isVal) => isVal ? 'Work Avg Mean (WAM)' : '% WAM', field: (r, isVal) => isVal ? r.qty_wam : r.p_wam, color: '#06b6d4', visible: () => this.showWAM() },
      { key: 'DI', type: 'line', name: 'DISTINCT USER', field: (r, isVal) => isVal ? (r.di ?? r.di_max ?? 0) : 0, color: '#005f73', visible: () => true },
      { key: 'ISSUED', type: 'line', name: (isVal) => isVal ? 'Issued' : '% Issued', field: (r, isVal) => isVal ? r.qty_i : r.p_issued, color: '#800080', visible: () => this.showIssued() }
    ]
  };

  constructor() {
    effect(() => {
      this.showDP();
      this.showDA();
      this.showDPM();
      this.showDAM();
      this.showWP();
      this.showWA();
      this.showWPM();
      this.showWAM();
      this.showIssued();
      this.plotType();

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

    const ds = this.chartContext.dataSource as LicenseOrganizationUtilizationDataSource;
    if (ds) {
      ds.selectedServer.set(this.server());
      ds.selectedFeature.set(this.feature());
    }
  }

  onPlotTypeChange(type: 'value' | 'percentage'): void {
    this.plotType.set(type);
    setTimeout(() => this.frameworkChart()?.renderChart(), 0);
  }

  toggleSeries(key: string): void {
    switch (key) {
      case 'DP': this.showDP.set(!this.showDP()); break;
      case 'DA': this.showDA.set(!this.showDA()); break;
      case 'DPM': this.showDPM.set(!this.showDPM()); break;
      case 'DAM': this.showDAM.set(!this.showDAM()); break;
      case 'WP': this.showWP.set(!this.showWP()); break;
      case 'WA': this.showWA.set(!this.showWA()); break;
      case 'WPM': this.showWPM.set(!this.showWPM()); break;
      case 'WAM': this.showWAM.set(!this.showWAM()); break;
      case 'ISSUED': this.showIssued.set(!this.showIssued()); break;
    }
    setTimeout(() => this.frameworkChart()?.renderChart(), 0);
  }
}
