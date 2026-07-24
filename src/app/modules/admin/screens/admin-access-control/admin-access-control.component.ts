import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { FrameworkGridComponent } from '@framework/grid';
import { FrameworkTabsComponent, FrameworkTabComponent } from '@framework/tabs';
import { AdminAccessControlContext } from './admin-access-control.context';

@Component({
  selector: 'app-admin-access-control',
  standalone: true,
  imports: [FrameworkGridComponent, FrameworkTabsComponent, FrameworkTabComponent],
  templateUrl: './admin-access-control.component.html',
  styleUrl: './admin-access-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAccessControl {
  context = inject(AdminAccessControlContext);
}
