import { Component, ChangeDetectionStrategy, signal, input } from '@angular/core';

@Component({
  selector: 'framework-tab',
  standalone: true,
  imports: [],
  templateUrl: './framework-tab.component.html',
  styleUrl: './framework-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FrameworkTabComponent {
  readonly tabTitle = input.required<string>();
  readonly icon = input<string>();

  isActive = signal(false);
}
