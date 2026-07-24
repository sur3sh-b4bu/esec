import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { SoftwareActcad } from './software-actcad/software-actcad';
import { SoftwareCosin } from './software-cosin/software-cosin';
import { SoftwareMulti } from './software-multi/software-multi';
import { SoftwarePup } from './software-pup/software-pup';
import { SoftwareVcs } from './software-vcs/software-vcs';
import { SoftwareWindchill } from './software-windchill/software-windchill';
import { SoftwareXcrash } from './software-xcrash/software-xcrash';

@Component({
  selector: 'app-software',
  imports: [
    SoftwareActcad,
    SoftwareCosin,
    SoftwareMulti,
    SoftwarePup,
    SoftwareVcs,
    SoftwareWindchill,
    SoftwareXcrash
  ],
  templateUrl: './software.html',
  styleUrl: './software.css',
})
export class Software {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
