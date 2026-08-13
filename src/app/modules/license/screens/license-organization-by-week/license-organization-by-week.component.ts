import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationByWeekContext } from './license-organization-by-week.context';
import { LicenseOrganizationByWeekDataSource } from './license-organization-by-week.ds';

@Component({
  selector: 'app-license-organization-by-week',
  standalone: true,
  imports: [FrameworkGridComponent],
  providers: [LicenseOrganizationByWeekContext, LicenseOrganizationByWeekDataSource],
  templateUrl: './license-organization-by-week.component.html',
  styleUrl: './license-organization-by-week.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LicenseOrganizationByWeek {
  context = inject(LicenseOrganizationByWeekContext);
}
