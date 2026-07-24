import { Component, inject } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { ModuleService } from '@core';

@Component({
  selector: 'app-tab-row',
  imports: [],
  templateUrl: './tab-row.html',
  styleUrl: './tab-row.css',
})

export class TabRow {

  sideBarService = inject(SideBarService);
  moduleService = inject(ModuleService);

  allMenus = this.moduleService.getModules()
  .flatMap((m: any) => m.module)
  .flatMap((m: any) => m.list);

  getIcon(tabTitle: string): string {
    const found = this.allMenus.find((item: any) => item.title === tabTitle);
    return found?.icon || 'bi bi-file-earmark-bar-graph';
  }

  public close(idToRemove: string) {
    const currentTabs = this.sideBarService.openedtab();
    this.sideBarService.openedtab.update(tabs => tabs.filter(t => t.id !== idToRemove));

    const remainingTabs = this.sideBarService.openedtab();
    if (remainingTabs.length === 0) {
      this.sideBarService.currenttab.set('');
    } else if (this.sideBarService.currenttab() === idToRemove) {
      this.sideBarService.currenttab.set(remainingTabs[0].id);
    }
  }
}
