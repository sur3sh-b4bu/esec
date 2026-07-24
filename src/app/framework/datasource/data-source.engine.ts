import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseDataSource } from './base-data-source';

@Injectable({
  providedIn: 'root'
})

export class DataSourceEngine {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api';

  load<T>(dataSource: BaseDataSource<T>, filterService: any): Observable<T[]> {
    const procedureKey = dataSource.procedure;
    if (!procedureKey) {
      throw new Error('DataSource must define a procedure key.');
    }

    let fullParams: any[] = [];
    if (dataSource.buildParams) {
      fullParams = dataSource.buildParams(filterService);
    } else {
      const range = filterService.range ? filterService.range() : '';
      const staticParams = dataSource.procedureParams || [];
      fullParams = [...staticParams,range,  "All"];
    }

    const body = {
      procedureKey: procedureKey,
      params: fullParams
    };

    return this.http.post<T[]>(`${this.baseUrl}/execute`, body);
  }
}
