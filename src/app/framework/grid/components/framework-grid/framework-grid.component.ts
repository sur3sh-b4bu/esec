import { Component, Input, ChangeDetectionStrategy, effect, signal, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridReadyEvent, ModelUpdatedEvent } from 'ag-grid-community';
import { GridContext } from '../../models/grid-context.model';
import { DataSourceEngine } from '../../../datasource';
import { DEFAULT_COL_DEF, DEFAULT_THEME } from '../../../../shared/config/grid.config';

@Component({
  selector: 'framework-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './framework-grid.component.html',
  styleUrl: './framework-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FrameworkGridComponent<T> {
  @Input({ required: true }) context!: GridContext<T>;

  private engine = inject(DataSourceEngine);

  theme = DEFAULT_THEME;
  defaultColDef = DEFAULT_COL_DEF;

  rowData = signal<T[]>([]);
  private gridApi!: GridApi;

  constructor() {
    effect(() => {
      if (this.context && this.context.dataSource) {

        this.context.filterService?.range?.();
        this.context.filterService?.option?.();
        this.context.filterService?.searchTerm?.();
        this.context.filterService?.licenseServerActive?.();
        this.context.dataSource.refreshTrigger?.();

        this.engine.load(this.context.dataSource, this.context.filterService).subscribe({
          next: (res) => {
            this.rowData.set(res);
            if (this.context.filterService && this.context.filterService.count) {
              this.context.filterService.count.set(res.length);
            }
          },
          error: (err) => console.error('FrameworkGrid fetch error:', err)
        });
      }
    });
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
  }

  onModelUpdated(event: ModelUpdatedEvent): void {
    if (this.gridApi && this.context && this.context.filterService && this.context.filterService.count) {
      this.context.filterService.count.set(this.gridApi.getDisplayedRowCount());
    }
  }
}
