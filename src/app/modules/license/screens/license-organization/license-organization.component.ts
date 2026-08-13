import { Component, inject, ChangeDetectionStrategy, effect } from '@angular/core';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkChartComponent } from '@framework/chart';
import { CellClickedEvent, GridApi, GridReadyEvent } from 'ag-grid-community';
import { LicenseOrganizationContext } from './license-organization.context';
import { LicenseOrganizationDataSource } from './license-organization.ds';
import { LicenseOrganizationGaugeContext } from './license-organization.gauge.context';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { SubFilterBarService } from '@core/services/sub-filterbar.service';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Component({
  selector: 'app-license-organization',
  standalone: true,
  imports: [
    FrameworkGridComponent,
    FrameworkChartComponent
    ],
  providers: [LicenseOrganizationContext, LicenseOrganizationDataSource, LicenseOrganizationGaugeContext],
  templateUrl: './license-organization.component.html',
  styleUrl: './license-organization.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LicenseOrganization {
  context = inject(LicenseOrganizationContext);
  gaugeContext = inject(LicenseOrganizationGaugeContext);
  filterService = inject(FilterServiceGlobal);
  private sideBarService = inject(SideBarService);
  private subFilterBarService = inject(SubFilterBarService);
  private gridapi!: GridApi;

  subTab = this.subFilterBarService.subTab;

  onCellClick(event: CellClickedEvent): void {
    if (event.colDef && event.colDef.field === 'sw' && event.data) {

      const currentSubFilter = this.subTab();

      const subFilterModuleMap: Record<string, string> = {
        'Summary': 'LicenseSummary',
        'Utilization': 'LicenseUtilization',
        'History': 'LicenseHistory',
        'QoS': 'LicenseQos',
        'Heatmap': 'LicenseHeatmap',
        'Month': 'LicenseMonth',
        'Date': 'LicenseDate',
        'Hours': 'LicenseHours',
        'Usage': 'LicenseUsage',
        'Utilization and Hours': 'LicenseUtilizationAndHours',
        'Checkout User': 'LicenseCheckoutUser',
        'Checkout Count': 'LicenseCheckoutCount',
        'Long Duration': 'LicenseLongDuration',
        'Denial': 'LicenseDenial',
        'Borrow': 'LicenseBorrow',
        'Division': 'LicenseDivision',
        'Department': 'LicenseDepartment',
        'Reservation': 'LicenseReservation',
        'Asset Info': 'LicenseAssetInfo',
        'Debug Data': 'LicenseDebugData',
        'Bundle': 'LicenseBundle'
      };

      const targetModule = subFilterModuleMap[currentSubFilter] || 'LicenseSummary';

      const server = event.data.server || '27005@MSILENGSAOLIC02';
      const feature = event.data.lic;
      const software = event.data.sw || 'Matlab';

      const uniqueId = 'tab_chart_' + Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6);
      const newTab: LayoutTab = {
        id: uniqueId,
        title: `${currentSubFilter} - ${feature}`,
        moduleName: targetModule,
        server: server,
        feature: feature,
        software: software,
        subTab: currentSubFilter   
      };

      this.sideBarService.openedtab.update(tabs => [newTab, ...tabs]);
      this.sideBarService.currenttab.set(uniqueId);
      let currentDateTime = new Date();
      console.log(currentDateTime.toLocaleDateString())
      this.filterService.notExpired.set(false);
    }
  }

  constructor() {
    effect(() => {
      this.filterService.notExpired();

      if (this.gridapi) {
        this.gridapi.onFilterChanged();
      }
    });
  }

  onGridReady(event: GridReadyEvent): void {
    this.gridapi = event.api;
  }
}
