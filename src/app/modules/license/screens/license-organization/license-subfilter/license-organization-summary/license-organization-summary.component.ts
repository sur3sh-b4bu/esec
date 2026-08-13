import { Component, inject, input, OnInit, signal, viewChildren, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridReadyEvent,
  ModuleRegistry,
  ClientSideRowModelModule,
  ValidationModule
} from 'ag-grid-community';
import { DataSourceEngine } from '@framework/datasource';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import {
  LicenseOrganizationChart30DataSource,
  LicenseOrganizationChartMonthDataSource,
  LicenseOrganizationChartWeekDataSource,
  LicenseOrganizationChartYearDataSource,
  LicenseOrganizationIndicatorDataSource
} from './license-organization-summary.ds';
import { DEFAULT_THEME, DEFAULT_COL_DEF } from '@shared/config/grid.config';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FrameworkChartComponent, ChartContext, SeriesSpec } from '@framework/chart';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule
]);

@Component({
  selector: 'app-license-organization-summary',
  standalone: true,
  imports: [CommonModule, AgGridAngular, FrameworkChartComponent],
  providers: [
    LicenseOrganizationChart30DataSource,
    LicenseOrganizationChartMonthDataSource,
    LicenseOrganizationChartWeekDataSource,
    LicenseOrganizationChartYearDataSource,
    LicenseOrganizationIndicatorDataSource
  ],
  templateUrl: './license-organization-summary.component.html',
  styleUrl: './license-organization-summary.component.css'
})
export class LicenseOrganizationSummary implements OnInit {
  readonly tab = input<LayoutTab>();
  readonly charts = viewChildren(FrameworkChartComponent);

  private engine = inject(DataSourceEngine);
  public filterService = inject(FilterServiceGlobal);

  public dsChart30 = inject(LicenseOrganizationChart30DataSource);
  public dsChartWeek = inject(LicenseOrganizationChartWeekDataSource);
  public dsChartMonth = inject(LicenseOrganizationChartMonthDataSource);
  public dsChartYear = inject(LicenseOrganizationChartYearDataSource);
  public dsIndicator = inject(LicenseOrganizationIndicatorDataSource);

  theme = DEFAULT_THEME;
  defaultColDef: ColDef = {
    ...DEFAULT_COL_DEF,
    resizable: true,
    sortable: true,
    filter: true,
    flex: 1
  };

  rowData30 = signal<any[]>([]);
  rowDataWeek = signal<any[]>([]);
  rowDataMonth = signal<any[]>([]);
  rowDataYear = signal<any[]>([]);
  rowDataIndicator = signal<any[]>([]);

  server = signal<string>('28000@MSILSMES01');
  feature = signal<string>('cognitive_add_on_rnx');
  software = signal<string>('RAMSIS');

  plotType = signal<'value' | 'percentage'>('value');
  showWorkingDays = signal<boolean>(false);
  showDP = signal<boolean>(true);
  showDA = signal<boolean>(false);
  showDPM = signal<boolean>(false);
  showDAM = signal<boolean>(false);
  showWP = signal<boolean>(true);
  showWA = signal<boolean>(false);
  showWPM = signal<boolean>(false);
  showWAM = signal<boolean>(false);
  showIssued = signal<boolean>(true);

  seriesSpecs: SeriesSpec[] = [
    { key: 'DP', name: (isVal) => isVal ? 'Day Peak (DP)' : '% DP', field: (r, isVal) => isVal ? r.Qty_dp : r.P_dp, color: '#0066cc', visible: () => this.showDP() },
    { key: 'DA', name: (isVal) => isVal ? 'Day Avg (DA)' : '% DA', field: (r, isVal) => isVal ? r.Qty_da : r.P_da, color: '#475569', visible: () => this.showDA() },
    { key: 'DPM', name: (isVal) => isVal ? 'Day Peak Mean (DPM)' : '% DPM', field: (r, isVal) => isVal ? r.Qty_dpm : r.P_dpm, color: '#f59e0b', visible: () => this.showDPM() },
    { key: 'DAM', name: (isVal) => isVal ? 'Day Avg Mean (DAM)' : '% DAM', field: (r, isVal) => isVal ? r.Qty_dam : r.P_dam, color: '#10b981', visible: () => this.showDAM() },
    { key: 'WP', name: (isVal) => isVal ? 'Work Peak (WP)' : '% WP', field: (r, isVal) => isVal ? r.Qty_wp : r.P_wp, color: '#ef4444', visible: () => this.showWP() },
    { key: 'WA', name: (isVal) => isVal ? 'Work Avg (WA)' : '% WA', field: (r, isVal) => isVal ? r.Qty_wa : r.P_wa, color: '#8b5cf6', visible: () => this.showWA() },
    { key: 'WPM', name: (isVal) => isVal ? 'Work Peak Mean (WPM)' : '% WPM', field: (r, isVal) => isVal ? r.Qty_wpm : r.P_wpm, color: '#ec4899', visible: () => this.showWPM() },
    { key: 'WAM', name: (isVal) => isVal ? 'Work Avg Mean (WAM)' : '% WAM', field: (r, isVal) => isVal ? r.Qty_wam : r.P_wam, color: '#06b6d4', visible: () => this.showWAM() },
    { key: 'ISSUED', name: () => 'ISSUED', field: (r, isVal) => isVal ? r.Qty_i : r.P_issued, color: '#800080', visible: () => this.showIssued() }
  ];

  seriesSpecsMonthYear: SeriesSpec[] = [
    { key: 'DP', type: 'column', name: (isVal) => isVal ? 'Day Peak (DP)' : '% DP', field: (r, isVal) => isVal ? r.Qty_dp : r.P_dp, color: '#0066cc', visible: () => this.showDP() },
    { key: 'DA', type: 'column', name: (isVal) => isVal ? 'Day Avg (DA)' : '% DA', field: (r, isVal) => isVal ? r.Qty_da : r.P_da, color: '#475569', visible: () => this.showDA() },
    { key: 'DPM', type: 'column', name: (isVal) => isVal ? 'Day Peak Mean (DPM)' : '% DPM', field: (r, isVal) => isVal ? r.Qty_dpm : r.P_dpm, color: '#f59e0b', visible: () => this.showDPM() },
    { key: 'DAM', type: 'column', name: (isVal) => isVal ? 'Day Avg Mean (DAM)' : '% DAM', field: (r, isVal) => isVal ? r.Qty_dam : r.P_dam, color: '#10b981', visible: () => this.showDAM() },
    { key: 'WP', type: 'column', name: (isVal) => isVal ? 'Work Peak (WP)' : '% WP', field: (r, isVal) => isVal ? r.Qty_wp : r.P_wp, color: '#ef4444', visible: () => this.showWP() },
    { key: 'WA', type: 'column', name: (isVal) => isVal ? 'Work Avg (WA)' : '% WA', field: (r, isVal) => isVal ? r.Qty_wa : r.P_wa, color: '#8b5cf6', visible: () => this.showWA() },
    { key: 'WPM', type: 'column', name: (isVal) => isVal ? 'Work Peak Mean (WPM)' : '% WPM', field: (r, isVal) => isVal ? r.Qty_wpm : r.P_wpm, color: '#ec4899', visible: () => this.showWPM() },
    { key: 'WAM', type: 'column', name: (isVal) => isVal ? 'Work Avg Mean (WAM)' : '% WAM', field: (r, isVal) => isVal ? r.Qty_wam : r.P_wam, color: '#06b6d4', visible: () => this.showWAM() },
    { key: 'ISSUED', type: 'line', name: () => 'ISSUED', field: (r, isVal) => isVal ? r.Qty_i : r.P_issued, color: '#800080', visible: () => this.showIssued() }
  ];

  chartContext30: ChartContext = {
    dataSource: this.dsChart30,
    filterService: this.filterService,
    xAxisField: 'Date',
    seriesSpecs: this.seriesSpecs
  };

  chartContextWeek: ChartContext = {
    dataSource: this.dsChartWeek,
    filterService: this.filterService,
    xAxisField: 'Week',
    seriesSpecs: this.seriesSpecs
  };

  chartContextMonth: ChartContext = {
    dataSource: this.dsChartMonth,
    filterService: this.filterService,
    xAxisField: 'Month',
    seriesSpecs: this.seriesSpecsMonthYear
  };

  chartContextYear: ChartContext = {
    dataSource: this.dsChartYear,
    filterService: this.filterService,
    xAxisField: 'Year',
    seriesSpecs: this.seriesSpecsMonthYear
  };

  indicatorColumnDefs = signal<ColDef[]>([
    { field: 'description', headerName: 'Description', minWidth: 160, filter: false, pinned: 'left' },
    { field: 'ytd', headerName: 'YTD', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) },
    { field: 'd07', headerName: '07 Days', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) },
    { field: 'd30', headerName: '30 Days', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) },
    { field: 'd60', headerName: '60 Days', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) },
    { field: 'd90', headerName: '90 Days', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) },
    { field: 'd180', headerName: '180 Days', minWidth: 90, filter: false, cellRenderer: (params: any) => this.formatIndicatorCell(params) }
  ]);

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) this.server.set(currentTab.server);
      if (currentTab.feature) this.feature.set(currentTab.feature);
      if (currentTab.software) this.software.set(currentTab.software);
    }

    this.dsChart30.selectedServer.set(this.server());
    this.dsChart30.selectedFeature.set(this.feature());
    this.dsChartWeek.selectedServer.set(this.server());
    this.dsChartWeek.selectedFeature.set(this.feature());
    this.dsChartMonth.selectedServer.set(this.server());
    this.dsChartMonth.selectedFeature.set(this.feature());
    this.dsChartYear.selectedServer.set(this.server());
    this.dsChartYear.selectedFeature.set(this.feature());
    this.dsIndicator.selectedServer.set(this.server());
    this.dsIndicator.selectedFeature.set(this.feature());

    this.engine.load(this.dsIndicator, this.filterService).subscribe({
      next: (res: any) => {
        const rows = this.extractIndicatorRows(res);
        this.rowDataIndicator.set(rows);
        console.log(rows);
      },
      error: (err) => console.error('Error fetching indicator data:', err)
    });
  }

  onIndicatorGridReady(params: GridReadyEvent): void {
    if (this.indicatorColumnDefs().length > 0) {
      params.api.setGridOption('columnDefs', this.indicatorColumnDefs());
    }
  }

  formatIndicatorCell(params: any): string {
    if (params.value === undefined || params.value === null) return '';
    if (params.data && String(params.data.description).includes('%')) {
      return `<span style="color: #1efc6fff; font-size: large; font-weight: bold; margin-right: 4px;">●</span>${params.value}`;
    }
    return String(params.value);
  }

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
      this.showWorkingDays();
      this.plotType();

      this.updateCharts();
    });
  }

  onPlotTypeChange(type: 'value' | 'percentage'): void {
    this.plotType.set(type);
    this.updateCharts();
  }

  toggleWorkingDays(): void {
    this.showWorkingDays.set(!this.showWorkingDays());
    this.updateCharts();
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
    this.updateCharts();
  }

  private updateCharts(): void {
    setTimeout(() => {
      const chartList = this.charts();
      if (chartList && chartList.length > 0) {
        chartList.forEach((chart) => chart.renderChart());
      }
    }, 0);
  }

  private extractIndicatorRows(res: any): any[] {
    let raw: any[] = [];
    if (Array.isArray(res)) {
      raw = res;
    } else if (res?.message && Array.isArray(res.message)) {
      raw = res.message;
    } else if (res?.data && Array.isArray(res.data)) {
      raw = res.data;
    }

    if (raw.length === 0) return [];

    const metricDefinitions = [
      { key: 'max_qty_i', desc: 'Issued' },
      { key: 'max_qty_r', desc: 'Reserved' },
      { key: 'qty_db', desc: 'Borrow' },
      { key: 'qty_dp', desc: 'Day Peak' },
      { key: 'qty_da', desc: 'Day Avg' },
      { key: 'qty_dpm', desc: 'Day Peak Mean' },
      { key: 'qty_dam', desc: 'Day Avg Mean' },
      { key: 'qty_wp', desc: 'Work Peak' },
      { key: 'qty_wa', desc: 'Work Avg' },
      { key: 'qty_wpm', desc: 'Work Peak Mean' },
      { key: 'qty_wam', desc: 'Work Avg Mean' },
      { key: 'di', desc: 'Users' },
      { key: 'ad', desc: 'Denial Users' },
      { key: 'td', desc: 'True Denial' },
      { key: 'avg_du', desc: 'License Hours Used' },
      { key: 'tlh_24', desc: 'License Hours Available' },
      { key: 'tot_du_q', desc: 'License Hours % 9.75 Hrs' }
    ];

    const getPeriodValue = (periodType: string, metricKey: string) => {
      const periodObj = raw.find((r: any) => String(r.type || r.period || '').toLowerCase() === periodType.toLowerCase());

      const available = periodObj.tlh_24 * 11 / 24;

      if (metricKey === 'tlh_24') {
        return available;
      }
      if (metricKey === 'tot_du_q') {
        const percentage = periodObj.tot_du_q / available * 100;
        return percentage.toFixed(1);
      }
      if (!periodObj || periodObj[metricKey] === undefined || periodObj[metricKey] === null) return 0;

      const val = Number(periodObj[metricKey]);
      return isNaN(val) ? periodObj[metricKey] : val;
    };

    return metricDefinitions.map(metric => ({
      description: metric.desc,
      ytd: getPeriodValue('ytd', metric.key),
      d07: getPeriodValue('07', metric.key),
      d30: getPeriodValue('30', metric.key),
      d60: getPeriodValue('60', metric.key),
      d90: getPeriodValue('90', metric.key),
      d180: getPeriodValue('180', metric.key),
      d360: getPeriodValue('360', metric.key)
    }));
  }
}

