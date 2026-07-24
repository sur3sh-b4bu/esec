import { Component, ContentChildren, QueryList, AfterContentInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { FrameworkTabComponent } from '../framework-tab/framework-tab.component';

@Component({
  selector: 'framework-tabs',
  standalone: true,
  imports: [],
  templateUrl: './framework-tabs.component.html',
  styleUrl: './framework-tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FrameworkTabsComponent implements AfterContentInit {
  @ContentChildren(FrameworkTabComponent) tabs!: QueryList<FrameworkTabComponent>;

  activeTab = signal<FrameworkTabComponent | null>(null);

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.isActive());
    if (activeTabs.length === 0 && this.tabs.first) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: FrameworkTabComponent) {
    this.tabs.forEach(t => t.isActive.set(false));
    tab.isActive.set(true);
    this.activeTab.set(tab);
  }
}
