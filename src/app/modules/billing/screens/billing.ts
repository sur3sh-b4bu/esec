import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { BillingDepartment } from './billing-department/billing-department';
import { BillingDivision } from './billing-division/billing-division';
import { BillingSummary } from './billing-summary/billing-summary';

@Component({
  selector: 'app-billing',
  imports: [
    BillingDepartment,
    BillingDivision,
    BillingSummary
  ],
  templateUrl: './billing.html',
  styleUrl: './billing.css',
})
export class Billing {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
