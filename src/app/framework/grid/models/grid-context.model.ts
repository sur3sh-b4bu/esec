import { ColDef } from 'ag-grid-community';
import { BaseDataSource } from '../../datasource';
import { PivotConfig } from '../utils/pivot-engine';

export interface GridContext<T> {
  columns: ColDef[];
  dataSource: BaseDataSource<T>;
  filterService: any;
  pivotConfig?: PivotConfig;
  gridOptions?: any;
}
