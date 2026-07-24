import { Component, inject } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { TabInstanceComponent } from './tab-instance.component';

@Component({
  selector: 'app-contents',
  imports: [TabInstanceComponent],
  templateUrl: './contents.html',
  styleUrl: './contents.css',
})
export class Contents {
  sideBarService = inject(SideBarService);
}
