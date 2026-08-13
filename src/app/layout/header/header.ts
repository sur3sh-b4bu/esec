import { Component, inject } from '@angular/core';
import { FilterServiceGlobal } from '@core/services/filter.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  filterService = inject(FilterServiceGlobal);

}
