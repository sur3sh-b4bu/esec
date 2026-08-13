import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseUsageDaywiseSummaryContext } from './license-usage-daywise-summary.context';
import { LicenseUsageDaywiseSummaryDataSource } from './license-usage-daywise-summary.ds';

@Component({
  selector: 'app-license-usage-daywise-summary',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseUsageDaywiseSummaryContext, LicenseUsageDaywiseSummaryDataSource],
  templateUrl: './license-usage-daywise-summary.component.html',
  styleUrl: './license-usage-daywise-summary.component.css'
})
export class LicenseUsageDaywiseSummary {
  context = inject(LicenseUsageDaywiseSummaryContext);
  readonly tab = input<LayoutTab>();
}
