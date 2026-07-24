import { Injectable, computed } from "@angular/core";
import { SideBarState } from "../state/side-bar.state";

@Injectable({
    providedIn: 'root'
})

export class SideBarService {
    sideBarState = new SideBarState();
    panelstatus = this.sideBarState.panelstatus;
    openedtab = this.sideBarState.openedtab;
    currenttab = this.sideBarState.currenttab;
    currentModule = this.sideBarState.currentModule;
    
    activeTabTitle = computed(() => {
        const id = this.currenttab();
        const tab = this.openedtab().find(t => t.id === id);
        return tab ? tab.title : '';
    });
}