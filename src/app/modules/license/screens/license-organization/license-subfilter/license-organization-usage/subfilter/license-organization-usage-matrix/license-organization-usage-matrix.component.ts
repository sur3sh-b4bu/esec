import { Component, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseOrganizationUsageMatrixDivision } from './subfilter/license-organization-usage-matrix-division/license-organization-usage-matrix-division.component';
import { LicenseOrganizationUsageMatrixDepartment } from './subfilter/license-organization-usage-matrix-department/license-organization-usage-matrix-department.component';
import { LicenseOrganizationUsageMatrixGroup } from './subfilter/license-organization-usage-matrix-group/license-organization-usage-matrix-group.component';
import { LicenseOrganizationUsageMatrixContext } from './license-organization-usage-matrix.context';
import { LicenseOrganizationUsageMatrixDataSource } from './license-organization-usage-matrix.ds';

export type MatrixSubTab = 'Division' | 'Department' | 'Group';

@Component({
  selector: 'app-license-organization-usage-matrix',
  standalone: true,
  imports: [
    CommonModule,
    LicenseOrganizationUsageMatrixDivision,
    LicenseOrganizationUsageMatrixDepartment,
    LicenseOrganizationUsageMatrixGroup
  ],
  providers: [LicenseOrganizationUsageMatrixContext, LicenseOrganizationUsageMatrixDataSource],
  templateUrl: './license-organization-usage-matrix.component.html',
  styleUrl: './license-organization-usage-matrix.component.css'
})
export class LicenseOrganizationUsageMatrix {
  context = inject(LicenseOrganizationUsageMatrixContext);
  readonly tab = input<LayoutTab>();

  readonly activeMatrixTab = signal<MatrixSubTab>('Division');
  readonly matrixTabs: MatrixSubTab[] = ['Division', 'Department', 'Group'];

  selectMatrixTab(tabName: MatrixSubTab): void {
    this.activeMatrixTab.set(tabName);
  }
}
