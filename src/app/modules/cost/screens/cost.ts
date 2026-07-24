import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { CostDepartment } from './cost-department/cost-department';
import { CostDivision } from './cost-division/cost-division';
import { CostOrganization } from './cost-organization/cost-organization';

@Component({
  selector: 'app-cost',
  imports: [
    CostDepartment,
    CostDivision,
    CostOrganization
  ],
  templateUrl: './cost.html',
  styleUrl: './cost.css',
})
export class Cost {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
