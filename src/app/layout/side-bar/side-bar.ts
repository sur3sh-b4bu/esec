import { Component,inject } from '@angular/core';
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

  selectModule(module: string){
    this.selectedpanel=module;
  }
}
