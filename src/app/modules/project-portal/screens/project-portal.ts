import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { ProjectPortalCreateEmployees } from './project-portal-create-employees/project-portal-create-employees';
import { ProjectPortalCreateProjects } from './project-portal-create-projects/project-portal-create-projects';
import { ProjectPortalRecharge } from './project-portal-recharge/project-portal-recharge';

@Component({
  selector: 'app-project-portal',
  imports: [
    ProjectPortalCreateEmployees,
    ProjectPortalCreateProjects,
    ProjectPortalRecharge
  ],
  templateUrl: './project-portal.html',
  styleUrl: './project-portal.css',
})
export class ProjectPortal {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
