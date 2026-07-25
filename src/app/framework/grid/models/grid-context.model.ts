import { ColDef } from 'ag-grid-community';
import { BaseDataSource } from '../../datasource';

export interface GridContext<T> {
  columns: ColDef[];
  dataSource: BaseDataSource<T>;
  filterService: any;
  gridOptions?: any;
}
