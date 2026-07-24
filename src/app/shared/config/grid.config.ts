import { LicenseManager, ColDef, themeQuartz,GridOptions } from 'ag-grid-enterprise';
import { environment } from '@env/environment';

LicenseManager.setLicenseKey(environment.agGridLicenseKey);

export const DEFAULT_THEME = themeQuartz.withParams({
  headerBackgroundColor: '#5b7185ff',
  headerTextColor: '#ffffff',
  cellFontSize: 14,
  headerFontSize: 14,
  columnHoverColor: '#5d6974ff',
  fontFamily: 'Segoe UI, Tahoma, Arial, sans-serif',
  tabSelectedTextColor: '#000000ff',
  wrapperBorderRadius: 0,
  cellHorizontalPaddingScale: 1.5, 
  rowVerticalPaddingScale: 0.3,   
  spacing: 8                      
});

export const DEFAULT_COL_DEF: ColDef = {
  filter: true,
  floatingFilter: true,
  sortable: true,
  resizable: true,
  filterParams: {
    buttons: ['clear', 'reset', 'apply'],
  }
};

export const PIVOT_GRID_OPTIONS: GridOptions = {
  pivotMode: true, 
  // suppressPivotResultCallout: true, 
  // suppressRowGroupHeaderPressBehavior: true,
}