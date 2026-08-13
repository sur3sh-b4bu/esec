import { inject, Injectable, effect, signal } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, statusPercentFormatter } from '@framework/grid';
import { ColDef, ColGroupDef, GridApi, GridOptions, GridReadyEvent, IRowNode } from 'ag-grid-community';
import { LicenseOrganizationDataSource } from './license-organization.ds';
import { LicenseOrganizationRow } from './license-organization.model';
import { StatusBarService } from '@core/services/statusbar.service';

@Injectable()
export class LicenseOrganizationContext implements GridContext<LicenseOrganizationRow> {

  statusBarService = inject(StatusBarService)

  dataSource = inject(LicenseOrganizationDataSource);
  filterService = inject(FilterServiceGlobal);

  gridApi = signal<GridApi | null>(null);

  onGridReady(params: GridReadyEvent<LicenseOrganizationRow>) {
    this.gridApi.set(params.api);
  }

  gridOptions: GridOptions<LicenseOrganizationRow> = {
    isExternalFilterPresent: (): boolean => {
      return !!this.filterService.notExpired();
    },

    doesExternalFilterPass: (node: IRowNode<LicenseOrganizationRow>): boolean => {
      const rowExpiry = node.data?.expiry;
      if (!rowExpiry) return true;

      const cleanExpiry = String(rowExpiry).trim().toLowerCase();

      if (['-', 'permanent', 'NONE', 'Not Defined', '', '1-jan-0', '01-jan-0000'].includes(cleanExpiry)) {
        return true;
      }

      let expiryDate: Date | null = null;

      const parsedNative = new Date(cleanExpiry);
      if (!isNaN(parsedNative.getTime())) {
        expiryDate = parsedNative;
      } else {
        const parts = cleanExpiry.split('-');
        if (parts.length === 3) {
          const months: Record<string, number> = {
            jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
            jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
          };
          const day = parseInt(parts[0], 10);
          const monthStr = parts[1].toLowerCase();
          let year = parseInt(parts[2], 10);

          if (year < 100) {
            year += 2000;
          }

          if (!isNaN(day) && months[monthStr] !== undefined && !isNaN(year)) {
            expiryDate = new Date(year, months[monthStr], day);
          }
        }
      }

      if (!expiryDate || isNaN(expiryDate.getTime())) {
        return true;
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return expiryDate >= today;
    }
  };

  constructor() {
    effect(() => {
      const api = this.gridApi();
      if (!api) return;

      const green = this.filterService.utilizationGreen();
      const orange = this.filterService.utilizationOrange();
      const red = this.filterService.utilizationRed();
      const active = this.filterService.licenseServerActive();
      const inactive = this.filterService.licenseServerInactive();

      let optionKey = (this.filterService.option() || 'dp').toLowerCase();
      if (['dp', 'dpm', 'da', 'dam'].includes(optionKey)) {
        optionKey = 'dp';
      }
      const colId = `p_${optionKey}`;

      let statusFilterModel: any = null;
      if (active && !inactive) {
        statusFilterModel = { filterType: 'set', values: ['Installed'] };
      } else if (!active && inactive) {
        statusFilterModel = { filterType: 'set', values: ['Uninstalled'] };
      } else if (active && inactive) {
        statusFilterModel = { filterType: 'set', values: ['Installed', 'Uninstalled'] };
      } else if (!active && !inactive) {
        statusFilterModel = { filterType: 'set', values: [] };
      }

      api.setColumnFilterModel('status', statusFilterModel);

      let utilizationFilterModel: any = null;
      if (green && !orange && !red) {
        utilizationFilterModel = { filterType: 'number', type: 'lessThan', filter: 59.9 };
      } else if (!green && orange && !red) {
        utilizationFilterModel = { filterType: 'number', type: 'inRange', filter: 60, filterTo: 80 };
      } else if (!green && !orange && red) {
        utilizationFilterModel = { filterType: 'number', type: 'greaterThanOrEqual', filter: 80 };
      } else if (green && orange && !red) {
        utilizationFilterModel = { filterType: 'number', type: 'lessThan', filter: 79.9 };
      } else if (!green && orange && red) {
        utilizationFilterModel = { filterType: 'number', type: 'greaterThanOrEqual', filter: 60 };
      } else if (green && orange && red) {
        utilizationFilterModel = null;
      } else if (!green && !orange && !red) {
        utilizationFilterModel = { filterType: 'number', type: 'greaterThanOrEqual', filter: 99999 };
      }

      ['p_dp', 'p_wp', 'p_wa', 'p_wpm', 'p_wam'].forEach(id => {
        api.setColumnFilterModel(id, id === colId ? utilizationFilterModel : null);
      });

      api.onFilterChanged();
    });
  }

  readonly columns: (ColDef | ColGroupDef)[] = [
    { headerName: 'S.No', valueGetter: 'node.rowIndex + 1', pinned: 'left', width: 75 },
    { field: 'sw', headerName: 'Software', pinned: 'left', width: 140, cellStyle: { color: '#0e0e0fff', fontWeight: '600' } },
    { field: 'server', headerName: 'Server', pinned: 'left', width: 190 },
    { field: 'lic_name', headerName: 'Feature', pinned: 'left', width: 190 },
    {
      headerName: 'Issued',
      children: [
        { field: 'l_qty_i', headerName: 'Last', width: 90 }
      ]
    },
    {
      headerName: 'Reserved',
      children: [
        { field: 'l_qty_r', headerName: 'Last', width: 100 }
      ]
    },

    {
      headerName: 'Borrow',
      children: [
        { field: 'qty_db', headerName: 'Qty', width: 100 }
      ]
    },

    {
      headerName: 'Day Peak',
      children: [
        { field: 'qty_dp', headerName: 'Qty', width: 80 },
        {
          field: 'p_dp',
          headerName: '%',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },

    {
      headerName: 'Work Peak',
      children: [
        { field: 'qty_wp', headerName: 'Qty', width: 80 },
        {
          field: 'p_wp',
          headerName: '%',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },

    {
      headerName: 'Work Avg',
      children: [
        { field: 'qty_wa', headerName: 'Qty', width: 80 },
        {
          field: 'p_wa',
          headerName: '%',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },

    {
      headerName: 'Work Peak Mean',
      children: [
        { field: 'qty_wpm', headerName: 'Qty', width: 80 },
        {
          field: 'p_wpm',
          headerName: '%',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },

    {
      headerName: 'Work Avg Mean',
      children: [
        { field: 'qty_wam', headerName: 'Qty', width: 80 },
        {
          field: 'p_wam',
          headerName: '%',
          width: 100,
          filter: 'agNumberColumnFilter',
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },

    {
      headerName: `License Hours - ${this.statusBarService.usageTime()} Hrs`,
      children: [
        { field: 'tot_du_q', headerName: 'Used', width: 110 },
        {
          field: 'tlh_24', headerName: 'Available', width: 110,
          valueFormatter: params => {
            if (!params.node) return '';
            const available = params.node.data.tlh_24 * this.statusBarService.usageTime() / 24;
            return String(Math.round(available) + 'k');
          }
        },
        {
          headerName: '%',
          width: 100,
          valueGetter: (params: any) => {
            if (!params.data || !params.data.tlh_24) return null;
            const available = (params.data.tlh_24 * this.statusBarService.usageTime()) / 24;
            if (!available) return null;
            return (params.data.tot_du_q * 100) / available;
          },
          valueFormatter: statusPercentFormatter,
          cellStyle: { fontSize: '11px' }
        }
      ]
    },
    { headerName: 'User', field: 'di', width: 85 },
    { headerName: 'Divn', field: 'ndivn', width: 85 },
    { headerName: 'Dept', field: 'ndept', width: 85 },
    { headerName: 'True Denial', field: 'td', width: 95 },
    {
      headerName: 'Days',
      children: [
        { field: 'w_days', headerName: 'Working', width: 100 },
        { field: 'days', headerName: 'License', width: 100 }
      ]
    },
    { headerName: 'Expiry', field: 'expiry', width: 110 },
    { headerName: 'Collected Date', field: 'last_date', width: 140 },
    { headerName: 'Status', field: 'status', width: 110, filter: 'agSetColumnFilter' }
  ];
}
