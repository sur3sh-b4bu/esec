import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { AssetComputer } from './asset-computer/asset-computer';
import { AssetFile } from './asset-file/asset-file';
import { AssetPrint } from './asset-print/asset-print';
import { AssetServices } from './asset-services/asset-services';
import { AssetShortcutMenu } from './asset-shortcut-menu/asset-shortcut-menu';

@Component({
  selector: 'app-asset',
  imports: [
    AssetComputer,
    AssetFile,
    AssetPrint,
    AssetServices,
    AssetShortcutMenu
  ],
  templateUrl: './asset.html',
  styleUrl: './asset.css',
})
export class Asset {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
