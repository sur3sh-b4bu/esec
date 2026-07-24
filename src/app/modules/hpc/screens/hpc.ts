import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { HpcCpuStatus } from './hpc-cpu-status/hpc-cpu-status';
import { HpcCurrentStatus } from './hpc-current-status/hpc-current-status';
import { HpcJobList } from './hpc-job-list/hpc-job-list';
import { HpcServerUsage } from './hpc-server-usage/hpc-server-usage';

@Component({
  selector: 'app-hpc',
  imports: [
    HpcCpuStatus,
    HpcCurrentStatus,
    HpcJobList,
    HpcServerUsage
  ],
  templateUrl: './hpc.html',
  styleUrl: './hpc.css',
})
export class Hpc {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
