import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FilterState {

    count = signal(0);
    showFilterBar = signal(true);

    searchTerm = signal('');

    range = signal('YTD');

    option = signal('dp');

    feature = signal('All');

    licenseServerActive = signal(true);
    licenseServerInactive = signal(true);

    notExpired = signal(true);

    utilizationGreen = signal(true);
    utilizationOrange = signal(true);
    utilizationRed = signal(true);

    viewMode = signal<'dashboard' | 'list'>('list');
}