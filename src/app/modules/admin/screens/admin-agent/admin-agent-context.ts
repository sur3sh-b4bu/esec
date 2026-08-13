import { inject, Injectable } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Injectable()
export class AdminAgentContext {
    dataSource: any;
    filterService = inject(FilterServiceGlobal);
    
    columns: any;
}
