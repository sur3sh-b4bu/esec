import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseUsageSummaryContext } from './license-usage-summary.context';
import { LicenseUsageSummaryDataSource } from './license-usage-summary.ds';

@Component({
  selector: 'app-license-usage-summary',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseUsageSummaryContext, LicenseUsageSummaryDataSource],
  templateUrl: './license-usage-summary.component.html',
  styleUrl: './license-usage-summary.component.css'
})
export class LicenseUsageSummary {
  context = inject(LicenseUsageSummaryContext);
  readonly tab = input<LayoutTab>();
}
