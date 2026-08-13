import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext } from '@framework/grid';
import { LicenseOrganizationDateDataSource } from './license-organization-date.ds';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Injectable()
export class LicenseOrganizationDateContext implements GridContext<any> {
  dataSource = inject(LicenseOrganizationDateDataSource);
  filterService = inject(FilterServiceGlobal);

  columns: (ColDef | ColGroupDef)[] = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'li_holi', headerName: 'Holiday', width: 150 },
    { field: 'qty_i', headerName: 'Issued Max', width: 120 },
    { field: 'qty_r', headerName: 'Reserved Max', width: 120 },
    { field: 'qty_db', headerName: 'Borrow', width: 120 },
    { headerName: 'Day Peak', children: [
      { field: 'qty_dp', headerName: 'Qty', width: 120 },
      { field: 'p_dp', headerName: '%', width: 120 }
    ]},
    { headerName: 'Week Peak', children: [
      { field: 'qty_wp', headerName: 'Qty', width: 120 },
      { field: 'p_wp', headerName: '%', width: 120 }
    ]},
    { headerName: 'Week Peak Average', children: [
      { field: 'qty_wa', headerName: 'Qty', width: 120 },
      { field: 'p_wa', headerName: '%', width: 120 }
    ]},
    { headerName: "License Hour - 9.75", children: [
    { field: 'tot_du_q', headerName: 'Used', width: 120 },
    { field: 'tlh_24', headerName: 'Available', width: 120 },
    { headerName: '% Used', width: 120,
      valueFormatter: param =>{
        let tlh_24 = param.data.tlh_24;
        let tot_du_q = param.data.tot_du_q;
        return (tot_du_q / tlh_24 * 100).toFixed(2);
      }
     }, ] },
    { field: 'di', headerName: 'Users', width: 120 },
    { field: 'td', headerName: 'True Denial', width: 120 }
    ];
}
