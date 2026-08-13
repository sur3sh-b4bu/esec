import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationDateContext } from './license-organization-date.context';
import { LicenseOrganizationDateDataSource } from './license-organization-date.ds';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';

@Component({
  selector: 'app-license-organization-date',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationDateContext, LicenseOrganizationDateDataSource],
  templateUrl: './license-organization-date.component.html',
  styleUrl: './license-organization-date.component.css'
})
export class LicenseOrganizationDate {
  context = inject(LicenseOrganizationDateContext);
  datasource = inject(LicenseOrganizationDateDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit(){
    const currentTab = this.tab();
    if (currentTab?.server) {
      this.datasource.selectedServer.set(currentTab.server);
    }
    if (currentTab?.feature) {
      this.datasource.selectedFeature.set(currentTab.feature);
    }
  }
}
