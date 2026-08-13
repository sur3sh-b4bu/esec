import { LicenseManager, ColDef, themeQuartz, GridOptions, ModuleRegistry, AllEnterpriseModule } from 'ag-grid-enterprise';
import { environment } from '@env/environment';

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(environment.agGridLicenseKey);

export const DEFAULT_THEME = themeQuartz.withParams({
  headerBackgroundColor: '#52657a',
  headerTextColor: '#ffffff',
  headerFontSize: 12,
  headerVerticalPaddingScale: 0.5,
  columnHoverColor: '#5d6974ff',
  textColor: '#1e293b',
  fontFamily: 'Segoe UI, Tahoma, Arial, sans-serif',
  tabSelectedTextColor: '#000000ff',
  wrapperBorderRadius: 0,
  cellHorizontalPaddingScale: 1.5,
  rowVerticalPaddingScale: 0.3,
  spacing: 8,
  fontSize: 12,
  backgroundColor: '#ffffff',
  oddRowBackgroundColor: '#f8fafc'
});

export const DEFAULT_COL_DEF: ColDef = {
  filter: true,
  suppressHeaderMenuButton: true,
  suppressHeaderFilterButton: true,
  resizable: true,
};

export const PIVOT_GRID_OPTIONS: GridOptions = {
  pivotMode: true,
}