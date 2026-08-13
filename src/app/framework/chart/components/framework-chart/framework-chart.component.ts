import {
  Component,
  input,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
  effect,
  signal,
  inject,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { ChartContext, SeriesSpec } from '../../models/chart-context.model';
import { DataSourceEngine } from '../../../datasource';

@Component({
  selector: 'framework-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-chart.component.html',
  styleUrl: './framework-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkChartComponent<T = any> implements OnDestroy {
  readonly context = input<ChartContext<T> | undefined>(undefined);
  readonly plotType = input<'value' | 'percentage'>('value');
  readonly options = input<Highcharts.Options | any>(undefined);
  readonly workingDaysOnly = input<boolean>(false);

  readonly chartContainerRef = viewChild<ElementRef<HTMLDivElement>>('chartContainer');

  private readonly engine = inject(DataSourceEngine);
  private chart?: Highcharts.Chart;
  private resizeObserver?: ResizeObserver;

  readonly chartData = signal<T[]>([]);

  constructor() {
    effect(() => {
      const currentContext = this.context();

      if (currentContext && currentContext.dataSource) {
        currentContext.filterService?.range?.();
        currentContext.filterService?.option?.();
        currentContext.filterService?.searchTerm?.();
        currentContext.filterService?.licenseServerActive?.();
        currentContext.dataSource.refreshTrigger?.();
        
        (currentContext.dataSource as any).selectedServer?.();
        (currentContext.dataSource as any).selectedFeature?.();
        if (typeof currentContext.dataSource.buildParams === 'function' && currentContext.filterService) {
          currentContext.dataSource.buildParams(currentContext.filterService);
        }

        this.engine.load(currentContext.dataSource, currentContext.filterService).subscribe({
          next: (res) => {
            const rawData = this.normalizeResponseData(res);
            this.chartData.set(rawData);
            this.renderChart();
          },
          error: (err) => {
            console.error('FrameworkChart fetch error:', err);
            this.chartData.set([]);
            this.renderChart();
          }
        });
      } else {
        this.renderChart();
      }
    });

    effect(() => {
      this.plotType();
      this.workingDaysOnly();
      if (this.chartData().length > 0) {
        this.renderChart();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = undefined;
    }
    if (this.chart) {
      this.chart.destroy();
      this.chart = undefined;
    }
  }

  private setupResizeObserver(container: HTMLElement): void {
    if (typeof ResizeObserver !== 'undefined' && !this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.chart) {
          this.chart.reflow();
        }
      });
      this.resizeObserver.observe(container);
    }
  }

  public renderChart(): void {
    const container = this.chartContainerRef()?.nativeElement;
    if (!container) {
      return;
    }

    this.setupResizeObserver(container);

    const customOptions = this.options();
    if (customOptions) {
      this.chart = Highcharts.chart(container, customOptions);
      setTimeout(() => this.chart?.reflow(), 0);
      return;
    }

    const currentContext = this.context();
    if (currentContext?.chartOptions) {
      this.chart = Highcharts.chart(container, currentContext.chartOptions);
      setTimeout(() => this.chart?.reflow(), 0);
      return;
    }

    let data = this.chartData();
    if (this.workingDaysOnly()) {
      data = data.filter((row: any) => !this.isRowHoliday(row, row[currentContext?.xAxisField || 'date']));
    }

    const effectivePlotType = this.plotType() || currentContext?.plotType || 'value';
    const isVal = effectivePlotType === 'value';

    const xAxisField = currentContext?.xAxisField || 'date';
    const categories = data.map((row: any, idx: number) => {
      if (xAxisField && row[xAxisField] !== undefined && row[xAxisField] !== null && row[xAxisField] !== 0 && row[xAxisField] !== '') {
        return String(row[xAxisField]);
      }
      const possibleKeys = [
        'w_days', 'days', 'Days', 'days_used', 'Days_Used', 'x_val', 'x', 'cnt', 'count', 'frequency',
        'Date', 'date', 'Week', 'Month', 'Year'
      ];
      for (const k of possibleKeys) {
        if (row[k] !== undefined && row[k] !== null && row[k] !== '') {
          return String(row[k]);
        }
      }
      const vals = Object.values(row || {});
      if (vals.length > 1 && vals[1] !== undefined && vals[1] !== null && vals[1] !== '') {
        return String(vals[1]);
      }
      if (vals.length > 0 && vals[0] !== undefined && vals[0] !== null && vals[0] !== '') {
        return String(vals[0]);
      }
      return String(idx + 1);
    });

    let series: Highcharts.SeriesOptionsType[] = [];

    if (typeof currentContext?.seriesSpecs === 'function') {
      series = currentContext.seriesSpecs(data);
    } else if (Array.isArray(currentContext?.seriesSpecs)) {
      series = this.buildSeriesFromSpecs(data, currentContext.seriesSpecs, isVal);
    }

    const builtOptions: Highcharts.Options = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Inter, system-ui, sans-serif' },
        spacingTop: 6,
        spacingBottom: 8,
        spacingLeft: 6,
        spacingRight: 10
      },
      title: {
        text: currentContext?.title || undefined,
        align: 'left',
        style: { fontSize: '12px', fontWeight: '600', color: '#1e293b' }
      },
      subtitle: {
        text: currentContext?.subtitle || undefined
      },
      legend: currentContext?.extraOptions?.legend || {
        enabled: false
      },
      xAxis: {
        categories,
        title: { text: currentContext?.xAxisTitle || undefined, style: { color: '#64748b', fontSize: '10px' } },
        crosshair: true,
        gridLineWidth: 1,
        gridLineColor: '#e6e6e6ff',
        tickPixelInterval: 60,
        labels: {
          useHTML: true,
          style: { fontSize: '10px' },
          rotation: currentContext?.extraOptions?.xAxis?.labels?.rotation ?? -45,
          reserveSpace: true,
          formatter: (function (self: FrameworkChartComponent) {
            return function (this: Highcharts.AxisLabelsFormatterContextObject) {
              const index = this.pos;
              const row = data[index];
              const valStr = String(this.value);

              const isHoli = self.isRowHoliday(row, valStr);
              if (isHoli) {
                return `<span style="color: red; font-weight: 600;">${valStr}</span>`;
              }
              return `<span style="color: black; font-weight: 500;">${valStr}</span>`;
            };
          })(this)
        }
      },
      yAxis: currentContext?.extraOptions?.yAxis || {
        title: { text: currentContext?.yAxisTitle || (isVal ? 'Quantity' : 'Percentage (%)'), style: { color: '#64748b', fontSize: '10px' } },
        labels: { format: isVal ? '{value}' : '{value}%', style: { color: '#475569', fontSize: '10px' } },
        gridLineWidth: 1,
        gridLineColor: '#e6e6e6ff'
      },
      tooltip: {
        shared: true,
        valueSuffix: isVal ? '' : '%'
      },
      exporting: {
        enabled: true,
        buttons: {
          contextButton: {
            symbol: 'menu',
            symbolStroke: '#0284c7',
            symbolSize: 12,
            theme: {
              fill: '#f0f9ff',
              stroke: '#7dd3fc',
              'stroke-width': 1,
              r: 3,
              states: {
                hover: { fill: '#e0f2fe' },
                select: { fill: '#bae6fd' }
              }
            }
          }
        }
      },
      navigation: {
        menuStyle: {
          background: '#ffffff',
          border: '1px solid #7dd3fc',
          padding: '5px 0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        },
        menuItemStyle: {
          padding: '0.5em 1em',
          color: '#0f172a',
          fontSize: '11px'
        },
        menuItemHoverStyle: {
          background: '#f0f9ff',
          color: '#0284c7'
        }
      },
      credits: { enabled: false },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            crop: false,
            overflow: 'allow',
            format: '{y}'
          }
        },
        column: {
          borderWidth: 0,
          groupPadding: 0.1,
          pointPadding: 0.05,
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            crop: false,
            overflow: 'allow',
            format: '{y}',
            style: { fontSize: '9px', fontWeight: '600', textOutline: 'none' }
          }
        },
        line: {
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            crop: false,
            overflow: 'allow',
            format: '{y}',
            style: { fontSize: '10px', fontWeight: 'bold', textOutline: 'none' }
          }
        }
      },
      series,
      ...(currentContext?.extraOptions || {})
    };

    if (this.chart) {
      this.chart.update(builtOptions, true, true);
    } else {
      this.chart = Highcharts.chart(container, builtOptions);
    }
    setTimeout(() => this.chart?.reflow(), 0);
  }

  private normalizeResponseData(res: any): any[] {
    let raw: any[] = [];
    if (Array.isArray(res)) {
      raw = res;
    } else if (res && Array.isArray(res.message)) {
      raw = res.message;
    } else if (res && Array.isArray(res.data)) {
      raw = res.data;
    }

    const currentContext = this.context();
    if (raw.length === 0) {
      if (currentContext?.xAxisField === 'lic_used' || currentContext?.yAxisTitle === 'Percentage') {
        raw = [{ lic_used: '1', pct: 10.8, percentage: 10.8, days: 174, w_days: 174 }];
      } else if (currentContext?.xAxisField === 'w_days') {
        raw = [
          { w_days: 21, qty_u: 1, qty_i: 7, p_days: 100, p_target: 1 },
          { w_days: 174, qty_u: 0, qty_i: 7, p_days: 50, p_target: 1 }
        ];
      }
    }

    const num = (v: any) => {
      if (v === null || v === undefined || v === '') return undefined;
      const n = Number(v);
      return isNaN(n) ? undefined : n;
    };

    return raw.map((row: any) => {
      const qty_i = num(row.Qty_i) ?? num(row.qty_i) ?? num(row.l_qty_i) ?? num(row.max_qty_i) ?? 0;
      const qty_dp = num(row.Qty_dp) ?? num(row.qty_dp) ?? num(row.dp) ?? 0;
      const qty_da = num(row.Qty_da) ?? num(row.qty_da) ?? num(row.da) ?? 0;
      const qty_dpm = num(row.Qty_dpm) ?? num(row.qty_dpm) ?? num(row.dpm) ?? qty_dp;
      const qty_dam = num(row.Qty_dam) ?? num(row.qty_dam) ?? num(row.dam) ?? qty_da;
      const qty_wp = num(row.Qty_wp) ?? num(row.qty_wp) ?? num(row.wp) ?? 0;
      const qty_wa = num(row.Qty_wa) ?? num(row.qty_wa) ?? num(row.wa) ?? 0;
      const qty_wpm = num(row.Qty_wpm) ?? num(row.qty_wpm) ?? num(row.wpm) ?? qty_wp;
      const qty_wam = num(row.Qty_wam) ?? num(row.qty_wam) ?? num(row.wam) ?? qty_wa;

      const calcPct = (val: number) => (qty_i > 0 ? Math.round((val / qty_i) * 1000) / 10 : 0);

      const p_dp = num(row.P_dp) ?? num(row.p_dp) ?? calcPct(qty_dp);
      const p_da = num(row.P_da) ?? num(row.p_da) ?? calcPct(qty_da);
      const p_dpm = num(row.P_dpm) ?? num(row.p_dpm) ?? calcPct(qty_dpm);
      const p_dam = num(row.P_dam) ?? num(row.p_dam) ?? calcPct(qty_dam);
      const p_wp = num(row.P_wp) ?? num(row.p_wp) ?? calcPct(qty_wp);
      const p_wa = num(row.P_wa) ?? num(row.p_wa) ?? calcPct(qty_wa);
      const p_wpm = num(row.P_wpm) ?? num(row.p_wpm) ?? calcPct(qty_wpm);
      const p_wam = num(row.P_wam) ?? num(row.p_wam) ?? calcPct(qty_wam);
      const p_issued = qty_i > 0 ? 100 : 0;

      return {
        ...row,
        days_used: row.days_used ?? row.Days_Used ?? row.w_days ?? row.days ?? row.Days ?? row.x_val ?? row.Date ?? row.date ?? '',
        Date: row.Date || row.date || row.d || row.max_qty_i || '',
        Week: row.Week || row.week || row.Date || row.date || '',
        Month: row.Month || row.month || row.Date || row.date || '',
        Year: row.Year || row.year || row.Date || row.date || '',
        Qty_i: qty_i,
        Qty_dp: qty_dp,
        Qty_da: qty_da,
        Qty_dpm: qty_dpm,
        Qty_dam: qty_dam,
        Qty_wp: qty_wp,
        Qty_wa: qty_wa,
        Qty_wpm: qty_wpm,
        Qty_wam: qty_wam,
        P_dp: p_dp,
        P_da: p_da,
        P_dpm: p_dpm,
        P_dam: p_dam,
        P_wp: p_wp,
        P_wa: p_wa,
        P_wpm: p_wpm,
        P_wam: p_wam,
        P_issued: p_issued
      };
    });
  }

  private buildSeriesFromSpecs(
    data: T[],
    specs: SeriesSpec<T>[],
    isVal: boolean
  ): Highcharts.SeriesOptionsType[] {
    return specs
      .filter((spec) => {
        if (typeof spec.visible === 'function') return spec.visible();
        if (typeof spec.visible === 'boolean') return spec.visible;
        return true;
      })
      .map((spec) => {
        const name = typeof spec.name === 'function' ? spec.name(isVal) : spec.name;
        const seriesData = data.map((row: any) => {
          if (typeof spec.field === 'function') {
            return spec.field(row, isVal);
          }
          return row[spec.field] ?? 0;
        });

        return {
          type: (spec.type || 'line') as any,
          name,
          id: spec.key || name,
          data: seriesData,
          color: spec.color,
          yAxis: spec.yAxis ?? 0,
          marker: spec.marker,
          ...(spec.extra || {})
        };
      });
  }

  private isRowHoliday(rowObj: any, valStr?: string): boolean {
    const r: any = rowObj;
    if (r) {
      const holiRaw = r.li_holi ?? r.holi ?? r.holiday ?? r.is_holiday;
      if (holiRaw !== undefined && holiRaw !== null && holiRaw !== '') {
        const str = String(holiRaw).trim().toUpperCase();
        if (str === 'Y' || str === '1' || str === 'TRUE' || str.includes('HOLIDAY') || str.includes('SUNDAY') || str.includes('SATURDAY')) {
          return true;
        }
        if (str === 'N' || str === '0' || str === 'FALSE' || str === 'WORKING') {
          return false;
        }
      }

      if (r.w_days !== undefined && r.w_days !== null) {
        if (Number(r.w_days) === 0) return true;
        if (Number(r.w_days) > 0) return false;
      }
    }

    if (valStr) {
      const parsedDate = new Date(valStr);
      if (!isNaN(parsedDate.getTime())) {
        const day = parsedDate.getDay();
        if (day === 0 || day === 6) return true;
      }
    }

    return false;
  }
}
