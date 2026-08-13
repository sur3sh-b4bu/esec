import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusBarService } from '../../../core/services/statusbar.service';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components implements OnInit {
  public statusBarService = inject(StatusBarService);

  ngOnInit(): void {
    this.parseTimeRange(this.statusBarService.selectedTimeRange());
  }

  parseTimeRange(rangeStr: string): void {
    if (!rangeStr) return;
    const parts = rangeStr.split('-').map(s => s.trim());
    if (parts.length === 2) {
      const startParts = parts[0].split(':').map(s => s.trim());
      const endParts = parts[1].split(':').map(s => s.trim());
      if (startParts.length === 2) {
        this.statusBarService.setStartHour(startParts[0].padStart(2, '0'));
        this.statusBarService.setStartMinute(startParts[1].padStart(2, '0'));
      }
      if (endParts.length === 2) {
        this.statusBarService.setEndHour(endParts[0].padStart(2, '0'));
        this.statusBarService.setEndMinute(endParts[1].padStart(2, '0'));
      }
    }
  }

  onStartHourChange(val: string): void {
    this.statusBarService.setStartHour(val);
  }

  onStartMinuteChange(val: string): void {
    this.statusBarService.setStartMinute(val);
  }

  onEndHourChange(val: string): void {
    this.statusBarService.setEndHour(val);
  }

  onEndMinuteChange(val: string): void {
    this.statusBarService.setEndMinute(val);
  }

  setActiveField(field: string): void {
    this.statusBarService.setActiveField(field);
  }
}

