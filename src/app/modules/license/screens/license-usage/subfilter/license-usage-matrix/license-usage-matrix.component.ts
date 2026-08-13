import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { LicenseUsageMatrixContext } from './license-usage-matrix.context';
import { LicenseUsageMatrixDataSource } from './license-usage-matrix.ds';

@Component({
  selector: 'app-license-usage-matrix',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseUsageMatrixContext, LicenseUsageMatrixDataSource],
  templateUrl: './license-usage-matrix.component.html',
  styleUrl: './license-usage-matrix.component.css'
})
export class LicenseUsageMatrix {
  context = inject(LicenseUsageMatrixContext);
  readonly tab = input<LayoutTab>();
}
