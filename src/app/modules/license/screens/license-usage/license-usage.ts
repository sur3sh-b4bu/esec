import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsage } from '../license-organization/license-subfilter/license-organization-usage/license-organization-usage.component';

@Component({
  selector: 'app-license-usage',
  standalone: true,
  imports: [CommonModule, LicenseOrganizationUsage],
  templateUrl: './license-usage.html',
  styleUrl: './license-usage.css',
})
export class LicenseUsage {
  readonly tab = input<LayoutTab>();
}
