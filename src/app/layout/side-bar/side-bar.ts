import { Component,inject,signal } from '@angular/core';
import { ModuleService } from '@core';
import { Panel } from './panel/panel';
import { SideBarService } from '@framework/layout/services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  imports: [Panel],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})

export class SideBar {

  moduleService = inject(ModuleService);
  sideBarService = inject(SideBarService);

  selectedpanel = '';
  panelTop = signal<number>(50);
  isExpanded = signal(false);

  private activeItemElement: HTMLElement | null = null;

  toggleSidebar() {
    this.isExpanded.update(val => !val);
    this.repositionPanel();
  }

  selectModule(module: string, event?: MouseEvent) {
    this.selectedpanel = module;
    if (event && event.currentTarget) {
      this.activeItemElement = event.currentTarget as HTMLElement;
      this.repositionPanel();
    }
  }

  private isTicking = false;

  onSidebarScroll() {
    if (!this.isTicking) {
      window.requestAnimationFrame(() => {
        this.repositionPanel();
        this.isTicking = false;
      });
      this.isTicking = true;
    }
  }

  private repositionPanel() {
    if (this.activeItemElement) {
      const rect = this.activeItemElement.getBoundingClientRect();
      // Close panel automatically if icon reaches/touches top header (< 50px) or bottom status bar
      if (rect.top < 50 || rect.top > window.innerHeight - 50) {
        this.sideBarService.panelstatus.set(false);
      } else {
        this.sideBarService.panelstatus.set(true);
        this.panelTop.set(rect.top);
      }
    }
  }
}
