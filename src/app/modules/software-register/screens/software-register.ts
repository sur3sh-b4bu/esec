import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { SoftwareRegisterNodeLocked } from './software-register-node-locked/software-register-node-locked';
import { SoftwareRegisterSoftwareRegister } from './software-register-software-register/software-register-software-register';
import { SoftwareRegisterSoftwareUtilizationMonth } from './software-register-software-utilization-month/software-register-software-utilization-month';

@Component({
  selector: 'app-software-register',
  imports: [
    SoftwareRegisterNodeLocked,
    SoftwareRegisterSoftwareRegister,
    SoftwareRegisterSoftwareUtilizationMonth
  ],
  templateUrl: './software-register.html',
  styleUrl: './software-register.css',
})
export class SoftwareRegister {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
