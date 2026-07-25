import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { LicenseOrganizationDataSource } from './license-organization.ds';
import { LicenseOrganizationRow } from './license-organization.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseOrganizationContext implements GridContext<LicenseOrganizationRow> {

  dataSource = inject(LicenseOrganizationDataSource);
  filterService = inject(FilterServiceGlobal);

  gridOptions = {};

  columns: (ColDef | ColGroupDef)[] = [
    // Flat Left Columns
    { headerName: 'S.No', valueGetter: 'node.rowIndex + 1', width: 110, pinned: 'left' },
    { field: 'sw', headerName: 'Software', width: 130, pinned: 'left', cellStyle: { color: '#0e0e0fff', fontWeight: '600' } },
    { field: 'server', headerName: 'Server', width: 170, pinned: 'left' },
    { field: 'lic_name', headerName: 'Feature', width: 180, pinned: 'left' },

    // Group 1: Issued
    {
      headerName: 'Issued',
      children: [
        { field: 'l_qty_i', headerName: 'Last', width: 100 }
      ]
    },

    // Group 2: Reserved
    {
      headerName: 'Reserved',
      children: [
        { field: 'l_qty_r', headerName: 'Last', width: 100 }
      ]
    },

    // Group 3: Borrow
    {
      headerName: 'Borrow',
      children: [
        { field: 'max_qty_i', headerName: 'Qty', width: 100 }
      ]
    },

    // Group 4: Day Peak
    {
      headerName: 'Day Peak',
      children: [
        { field: 'qty_dp', headerName: 'Qty', width: 100 },
        { 
          field: 'p_dp', 
          headerName: '%', 
          width: 95,
          cellRenderer: (params: any) => {
            if (params.value === undefined || params.value === null) return '';
            const val = Number(params.value);
            let color = '#10b981'; // Green <60%
            if (val >= 80) color = '#ef4444'; // Red >=80%
            else if (val >= 60) color = '#f59e0b'; // Orange 60-80%
            return `<span style="display:inline-flex; align-items:center; gap:6px;">
                      <span style="width:8px; height:8px; border-radius:50%; background-color:${color}; display:inline-block;"></span>
                      ${val}
                    </span>`;
          }
        }
      ]
    },

    // Group 5: Work Peak
    {
      headerName: 'Work Peak',
      children: [
        { field: 'qty_wp', headerName: 'Qty', width: 100 },
        { 
          field: 'p_wp', 
          headerName: '%', 
          width: 95,
          cellRenderer: (params: any) => {
            if (params.value === undefined || params.value === null) return '';
            const val = Number(params.value);
            let color = '#10b981';
            if (val >= 80) color = '#ef4444';
            else if (val >= 60) color = '#f59e0b';
            return `<span style="display:inline-flex; align-items:center; gap:6px;">
                      <span style="width:8px; height:8px; border-radius:50%; background-color:${color}; display:inline-block;"></span>
                      ${val}
                    </span>`;
          }
        }
      ]
    },

    // Group 6: Work Avg
    {
      headerName: 'Work Avg',
      children: [
        { field: 'qty_wa', headerName: 'Qty', width: 100 },
        { 
          field: 'p_wa', 
          headerName: '%', 
          width: 95,
          cellRenderer: (params: any) => {
            if (params.value === undefined || params.value === null) return '';
            const val = Number(params.value);
            let color = '#10b981';
            if (val >= 80) color = '#ef4444';
            else if (val >= 60) color = '#f59e0b';
            return `<span style="display:inline-flex; align-items:center; gap:6px;">
                      <span style="width:8px; height:8px; border-radius:50%; background-color:${color}; display:inline-block;"></span>
                      ${val}
                    </span>`;
          }
        }
      ]
    },

    // Group 7: Work Peak Mean
    {
      headerName: 'Work Peak Mean',
      children: [
        { field: 'qty_dpm', headerName: 'Qty', width: 100 },
        { 
          field: 'p_dpm', 
          headerName: '%', 
          width: 95,
          cellRenderer: (params: any) => {
            if (params.value === undefined || params.value === null) return '';
            const val = Number(params.value);
            let color = '#10b981';
            if (val >= 80) color = '#ef4444';
            else if (val >= 60) color = '#f59e0b';
            return `<span style="display:inline-flex; align-items:center; gap:6px;">
                      <span style="width:8px; height:8px; border-radius:50%; background-color:${color}; display:inline-block;"></span>
                      ${val}
                    </span>`;
          }
        }
      ]
    },

    // Group 8: Work Avg Mean
    {
      headerName: 'Work Avg Mean',
      children: [
        { field: 'qty_dam', headerName: 'Qty', width: 100 },
        { 
          field: 'p_dam', 
          headerName: '%', 
          width: 95,
          cellRenderer: (params: any) => {
            if (params.value === undefined || params.value === null) return '';
            const val = Number(params.value);
            let color = '#10b981';
            if (val >= 80) color = '#ef4444';
            else if (val >= 60) color = '#f59e0b';
            return `<span style="display:inline-flex; align-items:center; gap:6px;">
                      <span style="width:8px; height:8px; border-radius:50%; background-color:${color}; display:inline-block;"></span>
                      ${val}
                    </span>`;
          }
        }
      ]
    },

    // Group 9: License Hours
    {
      headerName: 'License Hours',
      children: [
        { field: 'tlh_24', headerName: 'Used', width: 100 }
      ]
    }
  ];
}
