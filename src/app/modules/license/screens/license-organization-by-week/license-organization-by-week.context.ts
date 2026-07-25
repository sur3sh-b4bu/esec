import { inject, Injectable } from "@angular/core";
import { LicenseOrganizationByWeekDataSource } from "./license-organization-by-week.ds";
import { FilterServiceGlobal } from '@core/services/filter.service';
import { GridContext, gridColumns } from '@framework/grid';
import { LicenseOrganizationByWeekRow } from "./license-organization-by-week.model";

@Injectable({
    providedIn: 'root'
})
export class LicenseOrganizationByWeekContext implements GridContext<LicenseOrganizationByWeekRow> {

    dataSource = inject(LicenseOrganizationByWeekDataSource);
    filterService = inject(FilterServiceGlobal);

    columns = gridColumns(
        'sw',
        'server',
        'location',
        'lic',
        'bundle',
        'date',
        'li_holi',
        'qty_i',
        'qty_dp',
        'p_dp',
        'di',
        { field: 'used_lic_hours', width: 200 },
        { field: 'avail_lic_hours', width: 200 },
        { field: 'p_dw_q', width: 200 }
    );
}