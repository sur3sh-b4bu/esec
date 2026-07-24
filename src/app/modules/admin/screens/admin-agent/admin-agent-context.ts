import { from } from "rxjs";
import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';

@Injectable({
    providedIn: 'root'
})
export class AdminAgentContext {
    dataSource: any;
    filterService = inject(FilterServiceGlobal);
    columns: any;
}
