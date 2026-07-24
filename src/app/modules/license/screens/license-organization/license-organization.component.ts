import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FrameworkGridComponent } from '@framework/grid';
import { LicenseOrganizationContext } from './license-organization.context';

@Component({
  selector: 'app-license-organization',
  standalone: true,
  imports: [FrameworkGridComponent],
  templateUrl: './license-organization.component.html',
  styleUrl: './license-organization.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LicenseOrganization {
  context = inject(LicenseOrganizationContext);
}
