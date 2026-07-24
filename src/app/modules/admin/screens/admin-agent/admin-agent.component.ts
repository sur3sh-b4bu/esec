import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FrameworkGridComponent } from '@framework/grid';
import { AdminAgentContext } from './admin-agent-context';

@Component({
  selector: 'app-admin-agent',
  standalone: true,
  imports: [FrameworkGridComponent],
  templateUrl: './admin-agent.component.html',
  styleUrl: './admin-agent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAgent{
  context = inject(AdminAgentContext);
}