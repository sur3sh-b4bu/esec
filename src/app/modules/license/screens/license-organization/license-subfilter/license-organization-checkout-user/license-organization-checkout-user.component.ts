import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationCheckoutUserContext } from './license-organization-checkout-user.context';
import { LicenseOrganizationCheckoutUserDataSource } from './license-organization-checkout-user.ds';

export type CheckoutMode = 'date' | 'time';

@Component({
  selector: 'app-license-organization-checkout-user',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationCheckoutUserContext, LicenseOrganizationCheckoutUserDataSource],
  templateUrl: './license-organization-checkout-user.component.html',
  styleUrl: './license-organization-checkout-user.component.css'
})
export class LicenseOrganizationCheckoutUser {
  context = inject(LicenseOrganizationCheckoutUserContext);
  readonly tab = input<LayoutTab>();

  readonly viewMode = signal<CheckoutMode>('date');

  setViewMode(mode: CheckoutMode): void {
    this.viewMode.set(mode);
  }
}
