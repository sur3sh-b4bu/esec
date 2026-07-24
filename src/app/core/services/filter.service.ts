import { Injectable, inject } from "@angular/core";
import { FilterState } from "../state/filter.state";

@Injectable({ providedIn: 'root' })
export class FilterServiceGlobal {
    private filterState = inject(FilterState);

    count = this.filterState.count;
    showFilterBar = this.filterState.showFilterBar;
    searchTerm = this.filterState.searchTerm;
    range = this.filterState.range;
    option = this.filterState.option;
    viewMode = this.filterState.viewMode;
    licenseServerActive = this.filterState.licenseServerActive;
    licenseServerInactive = this.filterState.licenseServerInactive;
    notExpired = this.filterState.notExpired;
    utilizationGreen = this.filterState.utilizationGreen;
    utilizationOrange = this.filterState.utilizationOrange;
    utilizationRed = this.filterState.utilizationRed;

    resetAll(): void {
        this.searchTerm.set('');
        this.range.set('YTD');
        this.option.set('DP');
        this.licenseServerActive.set(true);
        this.licenseServerInactive.set(false);
        this.notExpired.set(true);
        this.utilizationGreen.set(true);
        this.utilizationOrange.set(true);
        this.utilizationRed.set(true);
        this.viewMode.set('dashboard');
    }
}