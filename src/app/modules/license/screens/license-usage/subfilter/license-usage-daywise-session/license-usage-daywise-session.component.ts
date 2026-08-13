import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseUsageDaywiseSessionContext } from './license-usage-daywise-session.context';
import { LicenseUsageDaywiseSessionDataSource } from './license-usage-daywise-session.ds';

@Component({
  selector: 'app-license-usage-daywise-session',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseUsageDaywiseSessionContext, LicenseUsageDaywiseSessionDataSource],
  templateUrl: './license-usage-daywise-session.component.html',
  styleUrl: './license-usage-daywise-session.component.css'
})
export class LicenseUsageDaywiseSession {
  context = inject(LicenseUsageDaywiseSessionContext);
  readonly tab = input<LayoutTab>();
}
