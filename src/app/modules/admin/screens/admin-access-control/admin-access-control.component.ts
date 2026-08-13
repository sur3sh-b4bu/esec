import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ModuleService } from '@core';

@Component({
  selector: 'app-admin-access-control',
  standalone: true,
  imports: [],
  templateUrl: './admin-access-control.component.html',
  styleUrl: './admin-access-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AdminAccessControl {

  moduleService = inject(ModuleService);

  modules = this.moduleService.getModules();
}
