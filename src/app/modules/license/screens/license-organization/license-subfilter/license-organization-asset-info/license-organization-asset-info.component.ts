import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationAssetInfoContext } from './license-organization-asset-info.context';
import { LicenseOrganizationAssetInfoDataSource } from './license-organization-asset-info.ds';

export type AssetHoursMode = '24' | 'working';

@Component({
  selector: 'app-license-organization-asset-info',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationAssetInfoContext, LicenseOrganizationAssetInfoDataSource],
  templateUrl: './license-organization-asset-info.component.html',
  styleUrl: './license-organization-asset-info.component.css'
})
export class LicenseOrganizationAssetInfo {
  context = inject(LicenseOrganizationAssetInfoContext);
  readonly tab = input<LayoutTab>();

  readonly hoursMode = signal<AssetHoursMode>('24');
  readonly workingDays = signal<boolean>(true);

  setHoursMode(mode: AssetHoursMode): void {
    this.hoursMode.set(mode);
  }

  toggleWorkingDays(): void {
    this.workingDays.set(!this.workingDays());
    this.context.dataSource.workingDays.set(this.workingDays() ? 'Y' : 'N');
  }
}
