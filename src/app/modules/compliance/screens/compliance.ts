import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { ComplianceCommunicationPort } from './compliance-communication-port/compliance-communication-port';
import { ComplianceSoftwareCompliance } from './compliance-software-compliance/compliance-software-compliance';

@Component({
  selector: 'app-compliance',
  imports: [
    ComplianceCommunicationPort,
    ComplianceSoftwareCompliance
  ],
  templateUrl: './compliance.html',
  styleUrl: './compliance.css',
})
export class Compliance {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
