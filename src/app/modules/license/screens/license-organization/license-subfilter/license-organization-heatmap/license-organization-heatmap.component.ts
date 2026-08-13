import { Component, inject, input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkGridComponent } from '@framework/grid';
import { LayoutTab } from '@framework/layout/models/layout-tab.model';
import { StatusBarService } from '@core/services/statusbar.service';
import { LicenseOrganizationHeatmapContext } from './license-organization-heatmap.context';
import { LicenseOrganizationHeatmapDataSource } from './license-organization-heatmap.ds';

@Component({
  selector: 'app-license-organization-heatmap',
  standalone: true,
  imports: [CommonModule, FrameworkGridComponent],
  providers: [
    LicenseOrganizationHeatmapContext,
    LicenseOrganizationHeatmapDataSource
  ],
  templateUrl: './license-organization-heatmap.component.html',
  styleUrl: './license-organization-heatmap.component.css'
})
export class LicenseOrganizationHeatmap implements OnInit {
  context = inject(LicenseOrganizationHeatmapContext);
  ds = inject(LicenseOrganizationHeatmapDataSource);
  statusbarService = inject(StatusBarService);

  readonly tab = input<LayoutTab>();

  readonly server = signal<string>('');
  readonly feature = signal<string>('');
  readonly software = signal<string>('');
  readonly startDate = signal<string>('');
  readonly endDate = signal<string>('');

  readonly modeType = signal<string>('Utilization');
  readonly calcMode = signal<string>('Peak');
  readonly showUsed = signal<boolean>(true);
  readonly showIssued = signal<boolean>(true);
  readonly showPercentage = signal<boolean>(false);
  readonly showWorkingDays = signal<boolean>(false);

  readonly lastIssued = signal<number>(7);

  ngOnInit(): void {
    const currentTab = this.tab();
    if (currentTab) {
      if (currentTab.server) {
        this.server.set(currentTab.server);
        this.ds.selectedServer.set(currentTab.server);
      }
      if (currentTab.feature) {
        this.feature.set(currentTab.feature);
        this.ds.selectedFeature.set(currentTab.feature);
      }
      if (currentTab.software)
      this.software.set(currentTab.software);
      this.startDate.set(this.statusbarService.startDate());
      this.endDate.set(this.statusbarService.endDate());
    }
  }

  toggleWorkingDays(): void {
    this.showWorkingDays.set(!this.showWorkingDays());
  }
}
