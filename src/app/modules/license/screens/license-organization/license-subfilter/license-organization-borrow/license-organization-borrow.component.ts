import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationBorrowContext } from './license-organization-borrow.context';
import { LicenseOrganizationBorrowDataSource } from './license-organization-borrow.ds';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';

@Component({
  selector: 'app-license-organization-borrow',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationBorrowContext, LicenseOrganizationBorrowDataSource],
  templateUrl: './license-organization-borrow.component.html',
  styleUrl: './license-organization-borrow.component.css'
})
export class LicenseOrganizationBorrow {
  context = inject(LicenseOrganizationBorrowContext);
  readonly tab = input<LayoutTab>();
}
