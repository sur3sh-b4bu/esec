import { Component, inject, Input } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  imports: [FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {
  @Input() filterDashboard = false;
  @Input() filterText = false;
  @Input() filterRange = false;
  @Input() filterOption = false;
  @Input() filterFeature = false;
  @Input() filterLicenseServer = false;
  @Input() filterExpires = false;
  @Input() filterUtilization = false;
  @Input() filterWorkingDays = false;
  @Input() filterPrimary = false;
  @Input() filterLIssued = false;
  @Input() filterDpDayPeak = false;
  @Input() filterDpDay = false;
  @Input() filterDiDistinctUser = false;
  @Input() filterRowCount = false;

  filterService = inject(FilterServiceGlobal);

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
}
