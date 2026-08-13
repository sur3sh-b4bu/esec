import { Component, inject, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFilterBarService } from '@core/services/sub-filterbar.service';

@Component({
  selector: 'app-sub-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-filter-bar.html',
  styleUrl: './sub-filter-bar.css',
})
export class SubFilterBar {
  private readonly subFilterBarService = inject(SubFilterBarService);

  readonly activeTab = input<string>('Summary');
  readonly tabChange = output<string>();

  readonly subTabsGroup1: string[] = [
    'Summary', 'Utilization', 'History', 'QoS', 'Heatmap', 'Month', 'Date',
    'Hours', 'Usage', 'Utilization and Hours', 'Checkout User', 'Checkout Count',
    'Long Duration', 'Denial', 'Borrow', 'Division', 'Department', 'Reservation',
    'Asset Info', 'Debug Data', 'Bundle'
  ];

  readonly selectedTab = signal<string>('Summary');

  selectTab(tab: string): void {
    this.selectedTab.set(tab);
    this.subFilterBarService.setSubTab(tab);
    this.tabChange.emit(tab);
  }
}
