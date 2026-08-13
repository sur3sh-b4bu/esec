import { Component, ChangeDetectionStrategy, signal, contentChildren, effect } from '@angular/core';
import { FrameworkTabComponent } from '../framework-tab/framework-tab.component';

@Component({
  selector: 'framework-tabs',
  standalone: true,
  imports: [],
  templateUrl: './framework-tabs.component.html',
  styleUrl: './framework-tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FrameworkTabsComponent {
  readonly tabs = contentChildren(FrameworkTabComponent);

  activeTab = signal<FrameworkTabComponent | null>(null);

  constructor() {
    effect(() => {
      const allTabs = this.tabs();
      if (allTabs.length > 0 && !this.activeTab()) {
        const active = allTabs.find(tab => tab.isActive()) ?? allTabs[0];
        this.selectTab(active);
      }
    });
  }

  selectTab(tab: FrameworkTabComponent) {
    this.tabs().forEach(t => t.isActive.set(false));
    tab.isActive.set(true);
    this.activeTab.set(tab);
  }
}

