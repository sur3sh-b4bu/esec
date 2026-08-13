import { Component, input, output, ChangeDetectionStrategy, effect, signal, inject, OnDestroy } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { GridContext } from '../../models/grid-context.model';
import { DataSourceEngine } from '../../../datasource';
import { DEFAULT_COL_DEF, DEFAULT_THEME } from '../../../../shared/config/grid.config';
import { StatusBarService } from '../../../../core/services/statusbar.service';

@Component({
  selector: 'framework-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './framework-grid.component.html',
  styleUrl: './framework-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FrameworkGridComponent<T> implements OnDestroy {
  readonly context = input.required<GridContext<T>>();
  readonly sideBar = input<any>({
    toolPanels: ['columns', 'filters'],
    defaultToolPanel: ''
  });
  readonly cellClick = output<CellClickedEvent>();

  private engine = inject(DataSourceEngine);
  private statusBarService = inject(StatusBarService);

  theme = DEFAULT_THEME;
  defaultColDef = DEFAULT_COL_DEF;

  rowData = signal<T[]>([]);
  private gridApi!: GridApi;

  constructor() {
    effect(() => {
      const currentContext = this.context();
      if (currentContext && currentContext.dataSource) {

        currentContext.filterService?.range?.();
        currentContext.filterService?.option?.();
        currentContext.filterService?.searchTerm?.();
        currentContext.filterService?.licenseServerActive?.();
        currentContext.dataSource.refreshTrigger?.();
        this.statusBarService.usageTime();

        this.engine.load(currentContext.dataSource, currentContext.filterService).subscribe({
          next: (res) => {
            this.rowData.set(res || []);
            if (this.gridApi) {
              if (currentContext.columns) {
                this.gridApi.setGridOption('columnDefs', currentContext.columns);
              }
              this.gridApi.refreshHeader();
              this.gridApi.refreshCells({ force: true });
            }
            this.updateRowCount();
          },
          error: (err) => {
            console.error('FrameworkGrid fetch error:', err);
            this.rowData.set([]);
            this.updateRowCount();
          }
        });
      }
    });
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    (this.context() as any)?.onGridReady?.(params);
    this.updateRowCount();
  }

  onModelUpdated(): void {
    this.updateRowCount();
  }

  onCellClicked(event: CellClickedEvent): void {
    this.cellClick.emit(event);
  }

  ngOnDestroy(): void {
  }

  private updateRowCount(): void {
    const currentContext = this.context();
    if (currentContext && currentContext.filterService && currentContext.filterService.count) {
      const count = this.gridApi ? this.gridApi.getDisplayedRowCount() : this.rowData().length;
      currentContext.filterService.count.set(count);
    }
  }
}
