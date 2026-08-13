import { BaseDataSource } from '../../datasource';
import { FilterServiceGlobal } from '../../../core/services/filter.service';
import * as Highcharts from 'highcharts';

export interface SeriesSpec<T = any> {
  key: string;
  name: string | ((isVal: boolean) => string);
  field: string | ((row: T, isVal: boolean) => any);
  color?: string;
  type?: 'line' | 'column' | 'area' | 'spline' | string;
  visible?: boolean | (() => boolean);
  yAxis?: number;
  marker?: any;
  extra?: any;
}

export interface ChartContext<T = any> {
  dataSource?: BaseDataSource<T>;
  filterService?: FilterServiceGlobal;
  chartOptions?: Highcharts.Options | any;
  seriesSpecs?: SeriesSpec<T>[] | ((data: T[]) => Highcharts.SeriesOptionsType[]);
  title?: string;
  subtitle?: string;
  xAxisField?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
  plotType?: 'value' | 'percentage';
  extraOptions?: any;
}
