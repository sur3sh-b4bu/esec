import { signal, WritableSignal } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';

export abstract class BaseDataSource<T> {
  abstract procedure: string;
  procedureParams?: string[];
  refreshTrigger: WritableSignal<number> = signal(0);
  
  buildParams?(filterService: FilterServiceGlobal): any[];
}
