import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { StatusBar } from '../status-bar/status-bar';
import { SideBar } from '../side-bar/side-bar';
import { TabRow } from '../side-bar/tab-row/tab-row';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { Contents } from './contents/contents';
import { FilterServiceGlobal } from '@core/services/filter.service';
import { FilterBar } from '../filter-bar/filter-bar';

@Component({
  selector: 'app-display-page',
  imports: [Header, StatusBar, SideBar, TabRow, Contents, FilterBar],
  templateUrl: './display-page.html',
  styleUrl: './display-page.css',
})
export class DisplayPage {

  sideBarService = inject(SideBarService);
  filterService = inject(FilterServiceGlobal);

  status(){
    this.sideBarService.panelstatus.set(false);
  }
}
