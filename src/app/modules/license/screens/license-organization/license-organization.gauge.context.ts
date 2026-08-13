import { inject, Injectable, signal, effect, OnDestroy, untracked } from '@angular/core';
import * as Highcharts from 'highcharts';
import 'highcharts/highcharts-more';
import { Subscription } from 'rxjs';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { DataSourceEngine } from '@framework/datasource';
import { LicenseOrganizationDataSource } from './license-organization.ds';
import { LicenseOrganizationRow } from './license-organization.model';

export interface LicenseGaugeRow extends LicenseOrganizationRow {
  _gaugeOptions: Highcharts.Options;
}

@Injectable()
export class LicenseOrganizationGaugeContext implements OnDestroy {
  readonly dataSource = inject(LicenseOrganizationDataSource);
  readonly filterService = inject(FilterServiceGlobal);
  private engine = inject(DataSourceEngine);

  readonly rows = signal<LicenseGaugeRow[]>([]);

  private allRows: LicenseGaugeRow[] = [];
  private debounceTimer: any = null;
  private dataSub?: Subscription;

  private currentLimit = 100;
  private readonly INITIAL_LIMIT = 100;
  private readonly BATCH_STEP = 50;
  private readonly SCROLL_THRESHOLD = 0.8;

  private lastFilterKey = '';

  constructor() {
    effect(() => {
      const range = this.filterService.range ? this.filterService.range() : '';
      const option = this.filterService.option ? this.filterService.option() : '';
      const search = this.filterService.searchTerm ? this.filterService.searchTerm() : '';
      const serverActive = this.filterService.licenseServerActive ? this.filterService.licenseServerActive() : true;
      const notExp = this.filterService.notExpired ? this.filterService.notExpired() : false;

      const currentFilterKey = `${range}_${option}_${search}_${serverActive}_${notExp}`;
      const viewMode = this.filterService.viewMode ? this.filterService.viewMode() : 'dashboard';

      untracked(() => {
        if (viewMode === 'dashboard') {
          if (currentFilterKey !== this.lastFilterKey || this.allRows.length === 0) {
            this.lastFilterKey = currentFilterKey;
            this.scheduleFetchData();
          } else {
            this.resetToInitialLimit();
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private cleanup(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.dataSub) {
      this.dataSub.unsubscribe();
      this.dataSub = undefined;
    }
  }

  private scheduleFetchData(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.fetchData();
    }, 150);
  }

  private fetchData(): void {
    this.cleanup();

    this.dataSub = this.engine.load(this.dataSource, this.filterService).subscribe({
      next: (res: any) => {
        const rawList: LicenseOrganizationRow[] = Array.isArray(res) ? res : (res?.message || res?.data || []);
        
        this.allRows = rawList.map(row => ({
          ...row,
          _gaugeOptions: this.createGaugeOptions(row.p_dp || 0)
        }));

        this.resetToInitialLimit();
      },
      error: (err) => {
        console.error('LicenseOrganizationGaugeContext fetch error:', err);
        this.allRows = [];
        this.rows.set([]);
        if (this.filterService.count) {
          this.filterService.count.set(0);
        }
      }
    });
  }

  resetToInitialLimit(): void {
    this.currentLimit = this.INITIAL_LIMIT;
    if (this.allRows.length > 0) {
      this.rows.set(this.allRows.slice(0, this.currentLimit));
    }
    if (this.filterService.count) {
      this.filterService.count.set(this.allRows.length);
    }
    this.scrollToTop();
  }

  private scrollToTop(): void {
    setTimeout(() => {
      const gridEl = document.querySelector('.card-grid');
      if (gridEl) {
        gridEl.scrollTop = 0;
      }
    }, 0);
  }

  onViewportScroll(target: HTMLElement): void {
    if (!target || this.currentLimit >= this.allRows.length) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = target;
    if (scrollHeight <= 0) return;

    const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    if (scrollPercentage >= this.SCROLL_THRESHOLD) {
      this.currentLimit = Math.min(this.currentLimit + this.BATCH_STEP, this.allRows.length);
      this.rows.set(this.allRows.slice(0, this.currentLimit));
    }
  }

  private createGaugeOptions(value: number = 0): Highcharts.Options {
    const val = Number(value) || 0;
    return {
      chart: {
        type: 'gauge',
        backgroundColor: 'transparent',
        height: 145,
        width: 165,
        margin: [0, 0, 0, 0],
        animation: {
          duration: 800
        }
      },
      title: { text: undefined },
      credits: { enabled: false },
      exporting: { enabled: false },
      pane: {
        startAngle: -110,
        endAngle: 110,
        background: undefined,
        center: ['50%', '68%'],
        size: '115%'
      },
      yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 10,
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorTickColor: '#64748b',
        tickPixelInterval: 22,
        tickWidth: 1.5,
        tickPosition: 'inside',
        tickLength: 8,
        tickColor: '#334155',
        labels: {
          step: 1,
          rotation: 'auto',
          distance: -16,
          style: { fontSize: '9px', color: '#334155', fontWeight: '600' }
        },
        plotBands: [
          { from: 0, to: 60, color: '#4ade80', innerRadius: '90%', radius: '108%' },
          { from: 60, to: 80, color: '#f59e0b', innerRadius: '90%', radius: '108%' },
          { from: 80, to: 100, color: '#ef4444', innerRadius: '90%', radius: '108%' }
        ]
      } as any,
      plotOptions: {
        gauge: {
          animation: {
            duration: 800
          },
          dial: {
            radius: '70%',
            backgroundColor: '#ef4444',
            baseWidth: 5,
            topWidth: 1,
            baseLength: '0%',
            rearLength: '0%'
          },
          pivot: {
            backgroundColor: '#ef4444',
            radius: 6
          }
        }
      },
      series: [{
        type: 'gauge',
        name: 'Utilization',
        data: [val],
        dataLabels: { enabled: false }
      }]
    };
  }
}
