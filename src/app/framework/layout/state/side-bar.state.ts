import { Injectable, signal } from "@angular/core";
import { LayoutTab } from "../models/layout-tab.model";

@Injectable({
    providedIn: 'root'
})
export class SideBarState {
    panelstatus = signal(false);
    openedtab = signal<LayoutTab[]>([]);
    currenttab = signal<string>('');
    currentModule = signal<string | null>(null);
}
