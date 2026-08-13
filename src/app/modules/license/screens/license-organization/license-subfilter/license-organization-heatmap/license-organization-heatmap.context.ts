import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationHeatmapDataSource } from './license-organization-heatmap.ds';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { themeQuartz } from 'ag-grid-enterprise';

function getHeatmapBgColor(pct: number): string {
  if (pct === undefined || pct === null || isNaN(pct)) return '#ffffff';
  if (pct >= 100) return '#ef4444';
  if (pct > 90 && pct < 100) return '#b91c1c';
  if (pct > 80 && pct <= 90) return '#f97316';
  if (pct > 70 && pct <= 80) return '#eab308';
  if (pct > 60 && pct <= 70) return '#22c55e';
  if (pct > 50 && pct <= 60) return '#0284c7';
  if (pct > 0 && pct <= 50) return '#e0f2fe';
  return '#ffffff';
}

function getHeatmapTextColor(pct: number): string {
  if (pct >= 100 || (pct > 80 && pct < 100)) return '#ffffff';
  if (pct > 0) return '#0f172a';
  return '#64748b';
}

function getHourData(data: any, h: number) {
  if (!data) return { peak: 0, issued: 0, pct: 0 };

  const peak = Number(data[`h${h}_qty_p`]);
  const issued = Number(data[`h${h}_qty_i`]);
  const pct = Number(data[`h${h}_p_qty_p`]);

  return { peak, issued, pct };
}

@Injectable()
export class LicenseOrganizationHeatmapContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationHeatmapDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions: GridOptions = {};

  theme = themeQuartz.withParams({
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
    rowVerticalPaddingScale: 0.7,
    spacing: 8,
    fontSize: 12,
    backgroundColor: '#ffffff',
    oddRowBackgroundColor: '#f8fafc'
  });

  readonly columns: (ColDef | ColGroupDef)[] = [
    {
      field: 'c_date',
      headerName: 'Date',
      width: 120,
      pinned: 'left',
      valueGetter: (params) => params.data.c_date
    },
    ...Array.from({ length: 24 }, (_, h): ColDef => ({
      field: `h${h}`,
      headerName: `${h}`,
      width: 65,
      minWidth: 55,
      cellRenderer: (params: any) => {
        const { peak, issued, pct } = getHourData(params.data, h);
        return `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.2; padding: 2px 0;">
            <span style="font-weight: 500; font-size: 11px;">${peak} / ${issued}</span>
            <span style="font-size: 10px; opacity: 0.9;">${pct}</span>
          </div>
        `;
      },
      cellStyle: (params: any) => {
        const { pct } = getHourData(params.data, h);
        return {
          backgroundColor: getHeatmapBgColor(pct),
          color: getHeatmapTextColor(pct),
          textAlign: 'center',
          padding: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
      }
    }))
  ];
}


