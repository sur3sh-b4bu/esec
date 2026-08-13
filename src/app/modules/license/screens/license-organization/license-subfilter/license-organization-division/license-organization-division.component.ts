import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationDivisionContext } from './license-organization-division.context';
import { LicenseOrganizationDivisionDataSource } from './license-organization-division.ds';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';

@Component({
  selector: 'app-license-organization-division',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationDivisionContext, LicenseOrganizationDivisionDataSource],
  templateUrl: './license-organization-division.component.html',
  styleUrl: './license-organization-division.component.css'
})
export class LicenseOrganizationDivision {
  context = inject(LicenseOrganizationDivisionContext);
  ds = inject(LicenseOrganizationDivisionDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit():void{
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) {
        this.ds.selectedServer.set(currentTab.server);
      }
      if (currentTab.feature) {
        this.ds.selectedFeature.set(currentTab.feature);
      }
    }
  }
}

