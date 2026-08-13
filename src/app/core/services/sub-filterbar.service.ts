import { Injectable, inject } from "@angular/core";
import { SubFilterBarState } from "../state/sub-filterbar.state";

@Injectable({
    providedIn: 'root'
})
export class SubFilterBarService {
    private subFilterBarState = inject(SubFilterBarState);
    subTab = this.subFilterBarState.subTab;

    setSubTab(subTab: string): void {
        this.subFilterBarState.subTab.set(subTab);
    }

    getSubTab(): string {
        return this.subFilterBarState.subTab();
    }

    resetSubTab(): void {
        this.subFilterBarState.subTab.set('Summary');
    }
}