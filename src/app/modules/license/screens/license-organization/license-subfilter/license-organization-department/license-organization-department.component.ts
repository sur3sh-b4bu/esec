import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationDepartmentContext } from './license-organization-department.context';
import { LicenseOrganizationDepartmentDataSource } from './license-organization-department.ds';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';

@Component({
  selector: 'app-license-organization-department',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [LicenseOrganizationDepartmentContext, LicenseOrganizationDepartmentDataSource],
  templateUrl: './license-organization-department.component.html',
  styleUrl: './license-organization-department.component.css'
})
export class LicenseOrganizationDepartment {
  context = inject(LicenseOrganizationDepartmentContext);
  ds = inject(LicenseOrganizationDepartmentDataSource);
  readonly tab = input<LayoutTab>();

  ngOnInit(): void {
    const currentTab = this.tab();
    if(currentTab){
      if(currentTab.feature){
        this.ds.selectedFeature.set(currentTab.feature);
      }
      if(currentTab.server){
        this.ds.selectedServer.set(currentTab.server);
      }
    }
  }
}
