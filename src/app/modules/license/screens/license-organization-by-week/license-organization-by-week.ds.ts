import { Injectable } from "@angular/core";
import { BaseDataSource } from '@framework/datasource';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { LicenseOrganizationByWeekRow } from "./license-organization-by-week.model";

@Injectable()
export class LicenseOrganizationByWeekDataSource extends BaseDataSource<LicenseOrganizationByWeekRow> {
    override procedure = 'esms_m.r_organization_week_report';
    override procedureParams = ['2026-07-12', '2026-07-18', '9.75', ''];

    override buildParams(_filterService: FilterServiceGlobal): any[] {
        return ['2026-07-12', '2026-07-18', '9.75', ''];
    }
}