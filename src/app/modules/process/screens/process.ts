import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { ProcessComputerProcess } from './process-computer-process/process-computer-process';
import { ProcessExeUsage } from './process-exe-usage/process-exe-usage';
import { ProcessId } from './process-id/process-id';
import { ProcessLicenseHarvest } from './process-license-harvest/process-license-harvest';
import { ProcessLicenseHarvestSummary } from './process-license-harvest-summary/process-license-harvest-summary';
import { ProcessSoftwareUsage } from './process-software-usage/process-software-usage';
import { ProcessUser } from './process-user/process-user';
import { ProcessUserComputer } from './process-user-computer/process-user-computer';
import { ProcessUserProcess } from './process-user-process/process-user-process';
import { ProcessUserProcessComputer } from './process-user-process-computer/process-user-process-computer';
import { ProcessWebsite } from './process-website/process-website';

@Component({
  selector: 'app-process',
  imports: [
    ProcessComputerProcess,
    ProcessExeUsage,
    ProcessId,
    ProcessLicenseHarvest,
    ProcessLicenseHarvestSummary,
    ProcessSoftwareUsage,
    ProcessUser,
    ProcessUserComputer,
    ProcessUserProcess,
    ProcessUserProcessComputer,
    ProcessWebsite
  ],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
