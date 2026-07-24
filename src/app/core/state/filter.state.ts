import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FilterState {

    count = signal(0);
    showFilterBar = signal(true);

    searchTerm = signal('');

    range = signal('YTD');

    option = signal('DP');

    licenseServerActive = signal(true);
    licenseServerInactive = signal(false);

    notExpired = signal(true);

    utilizationGreen = signal(true);
    utilizationOrange = signal(true);
    utilizationRed = signal(true);

    viewMode = signal<'dashboard' | 'list'>('dashboard');
}