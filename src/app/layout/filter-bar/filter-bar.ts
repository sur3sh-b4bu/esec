import { Component, inject, input } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {
  readonly filterDashboard = input<boolean>(false);
  readonly filterText = input<boolean>(false);
  readonly filterRange = input<boolean>(false);
  readonly filterOption = input<boolean>(false);
  readonly filterFeature = input<boolean>(false);
  readonly filterLicenseServer = input<boolean>(false);
  readonly filterExpires = input<boolean>(false);
  readonly filterUtilization = input<boolean>(false);
  readonly filterWorkingDays = input<boolean>(false);
  readonly filterPrimary = input<boolean>(false);
  readonly filterLIssued = input<boolean>(false);
  readonly filterDpDayPeak = input<boolean>(false);
  readonly filterDpDay = input<boolean>(false);
  readonly filterDiDistinctUser = input<boolean>(false);
  readonly filterRowCount = input<boolean>(false);

  readonly filterService = inject(FilterServiceGlobal);

  toggleSignal(signal: { set: (v: boolean) => void; (): boolean }): void {
    signal.set(!signal());
  }

  setViewMode(mode: 'dashboard' | 'list'): void {
    this.filterService.viewMode.set(mode);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterService.searchTerm.set(value);
  }

  onRangeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filterService.range.set(value);
  }

  onOptionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filterService.option.set(value);
  }

  onFeatureChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.filterService.feature.set(value);
  }
}
