import { Injectable } from '@angular/core';
import { BaseDataSource } from '@framework/datasource';
import { AdminAccessControlRow } from './admin-access-control.model';

@Injectable({
  providedIn: 'root'
})

export class AdminAccessControlDataSource extends BaseDataSource<AdminAccessControlRow> {
  override procedure = 'organization_grid';
  override procedureParams = ['webtest123'];
}
