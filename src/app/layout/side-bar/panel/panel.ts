import { Component, inject, input } from '@angular/core';
import { ModuleService } from '@core';
import { SideBarService } from '@framework/layout/services/side-bar.service';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})

export class Panel {
  moduleService = inject(ModuleService);
  sideBarService = inject(SideBarService);

  getname = input<string>();

  openedtab(moduleName: string, tab: string) {
    this.sideBarService.currentModule.set(moduleName);
    
    const uniqueId = 'tab_' + Date.now().toString() + '_' + Math.random().toString(36).substr(2, 5);
    const newTab = { id: uniqueId, title: tab, moduleName: moduleName };
    
    this.sideBarService.openedtab.update(i => [newTab, ...i]);
    this.sideBarService.currenttab.set(uniqueId);
  }
}
