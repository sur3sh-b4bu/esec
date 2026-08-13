import { Component, inject, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarService } from '../../core/services/statusbar.service';
import { Components } from './components/components';

@Component({
  selector: 'app-status-bar',
  imports: [CommonModule, Components],
  templateUrl: './status-bar.html',
  styleUrl: './status-bar.css',
})
export class StatusBar implements OnInit {
  public statusBarService = inject(StatusBarService);

  @ViewChild('startDateInput') startDateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('endDateInput') endDateInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.statusBarService.applyPeriodDates(this.selectedPeriod);
  }

  get currentdate(): string {
    return this.statusBarService.currentDate();
  }

  get parameter(): boolean {
    return this.statusBarService.parameter();
  }

  get time(): boolean {
    return this.statusBarService.time();
  }

  get selectedPeriod(): string {
    return this.statusBarService.selectedPeriod();
  }

  onPeriodChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.statusBarService.setSelectedPeriod(value);
  }

  exportDate(): void {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();
    const timeStr = d.toTimeString().split(' ')[0];
    const formatted = `${day}-${month}-${year} - ${timeStr}`;
    this.statusBarService.setCurrentDate(formatted);
  }

  openParameter(): void {
    this.statusBarService.toggleParameters();
  }

  timebutton(): void {
    this.statusBarService.toggleTime();
  }

  openStartDatePicker(): void {
    if (this.startDateInput?.nativeElement) {
      const el = this.startDateInput.nativeElement;
      if (typeof (el as any).showPicker === 'function') {
        (el as any).showPicker();
      } else {
        el.click();
      }
    }
  }

  openEndDatePicker(): void {
    if (this.endDateInput?.nativeElement) {
      const el = this.endDateInput.nativeElement;
      if (typeof (el as any).showPicker === 'function') {
        (el as any).showPicker();
      } else {
        el.click();
      }
    }
  }

  handleStartDateSelection(value: string): void {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        const formatted = `${String(dateObj.getDate()).padStart(2, '0')}-${monthNames[dateObj.getMonth()]}-${dateObj.getFullYear()}`;
        this.statusBarService.setStartDate(formatted);
      } else {
        this.statusBarService.setStartDate(value);
      }
    }
  }

  handleEndDateSelection(value: string): void {
    if (value) {
      const parts = value.split('-');
      if (parts.length === 3) {
        const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        const formatted = `${String(dateObj.getDate()).padStart(2, '0')}-${monthNames[dateObj.getMonth()]}-${dateObj.getFullYear()}`;
        this.statusBarService.setEndDate(formatted);
      } else {
        this.statusBarService.setEndDate(value);
      }
    }
  }

  checkperiod(period: string): boolean {
    return this.statusBarService.selectedPeriod() !== period;
  }
}



