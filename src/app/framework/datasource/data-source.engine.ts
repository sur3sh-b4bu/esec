import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseDataSource } from './base-data-source';

@Injectable({
  providedIn: 'root'
})

export class DataSourceEngine {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000/api';

  load<T>(dataSource: BaseDataSource<T>, filterService: any): Observable<T[]> {
    const procedureKey = dataSource.procedure;
    if (!procedureKey) {
      throw new Error('DataSource must define a procedure key.');
    }

    let fullParams: any[] = [];
    if (dataSource.buildParams) {
      fullParams = dataSource.buildParams(filterService);
    } else {
      throw new Error('DataSource must define a buildParams method.');    
    }

    const body = {
      procedureKey: procedureKey,
      params: fullParams
    };

    return this.http.post<T[]>(`${this.baseUrl}/execute`, body).pipe(
      map(res => dataSource.processResponse ? dataSource.processResponse(res) : res)
    );
  }
}
