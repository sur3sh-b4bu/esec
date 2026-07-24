import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { LicenseManagerBentley } from './license-manager-bentley/license-manager-bentley';
import { LicenseManagerCheckout } from './license-manager-checkout/license-manager-checkout';
import { LicenseManagerDenial } from './license-manager-denial/license-manager-denial';
import { LicenseManagerExpiry } from './license-manager-expiry/license-manager-expiry';
import { LicenseManagerFeature } from './license-manager-feature/license-manager-feature';
import { LicenseManagerFeatureView } from './license-manager-feature-view/license-manager-feature-view';
import { LicenseManagerLogs } from './license-manager-logs/license-manager-logs';
import { LicenseManagerOpt } from './license-manager-opt/license-manager-opt';
import { LicenseManagerService } from './license-manager-service/license-manager-service';
import { LicenseManagerVendor } from './license-manager-vendor/license-manager-vendor';

@Component({
  selector: 'app-license-manager',
  imports: [
    LicenseManagerBentley,
    LicenseManagerCheckout,
    LicenseManagerDenial,
    LicenseManagerExpiry,
    LicenseManagerFeature,
    LicenseManagerFeatureView,
    LicenseManagerLogs,
    LicenseManagerOpt,
    LicenseManagerService,
    LicenseManagerVendor
  ],
  templateUrl: './license-manager.html',
  styleUrl: './license-manager.css',
})
export class LicenseManager {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
