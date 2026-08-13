import { Injectable, inject, effect } from '@angular/core';
import { StatusBarState } from '../state/statusbar.state';

@Injectable({
  providedIn: 'root'
})
export class StatusBarService {
  private statusBarState = inject(StatusBarState);

  time = this.statusBarState.time;
  parameter = this.statusBarState.parameter;
  selectedPeriod = this.statusBarState.selectedPeriod;
  startDate = this.statusBarState.startDate;
  endDate = this.statusBarState.endDate;
  selectedTimeRange = this.statusBarState.selectedTimeRange;
  currentDate = this.statusBarState.currentDate;

  // Time & Active Field Signals
  startHour = this.statusBarState.startHour;
  startMinute = this.statusBarState.startMinute;
  endHour = this.statusBarState.endHour;
  endMinute = this.statusBarState.endMinute;
  activeField = this.statusBarState.activeField;

  // Parameter Signals
  cpuHours = this.statusBarState.cpuHours;
  usageHour = this.statusBarState.usageHour;
  usageMinute = this.statusBarState.usageMinute;
  percentile = this.statusBarState.percentile;
  longDuration = this.statusBarState.longDuration;
  usageTime = this.statusBarState.usageTime;

  constructor() {
    effect(() => {
      const hours = Number(this.usageHour() || 0);
      const minutes = Number(this.usageMinute() || 0);
      const total = hours + (minutes / 60);
      this.statusBarState.usageTime.set(Number(total.toFixed(2)));
    });
  }


  toggleTime(): void {
    this.statusBarState.time.update(v => !v);
  }

  toggleParameters(): void {
    this.statusBarState.parameter.update(v => !v);
  }

  setTime(value: boolean): void {
    this.statusBarState.time.set(value);
  }

  setParameters(value: boolean): void {
    this.statusBarState.parameter.set(value);
  }

  setSelectedPeriod(period: string): void {
    this.statusBarState.selectedPeriod.set(period);
    this.applyPeriodDates(period);
  }

  public applyPeriodDates(period: string): void {
    if (!period || period === 'date-range') return;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let startDateObj: Date;
    let endDateObj: Date = new Date(today);

    const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const monthIndexMap: Record<string, number> = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    if (!isNaN(Number(period))) {
      const num = Number(period);
      if (num >= 2000 && num <= 2100) {
        startDateObj = new Date(num, 0, 1);
        endDateObj = new Date(num, 11, 31);
      } else {
        startDateObj = new Date(today.getTime());
        startDateObj.setDate(today.getDate() - (num - 1));
      }
    } else if (period === 'week') {
      const day = today.getDay();
      const diffToMonday = day === 0 ? -6 : 1 - day;
      startDateObj = new Date(today.getTime());
      startDateObj.setDate(today.getDate() + diffToMonday);
      endDateObj = new Date(today.getTime());
    } else if (period === 'ytd') {
      startDateObj = new Date(today.getFullYear(), 0, 1);
      endDateObj = new Date(today.getTime());
    } else if (period.includes('-')) {
      const parts = period.split('-');
      const p1 = parts[0].toLowerCase();
      const p2 = parseInt(parts[1], 10);

      if (monthIndexMap[p1] !== undefined) {
        const mIdx = monthIndexMap[p1];
        startDateObj = new Date(p2, mIdx, 1);
        endDateObj = new Date(p2, mIdx + 1, 0);
      } else if (p1 === 'q1') {
        startDateObj = new Date(p2, 0, 1);
        endDateObj = new Date(p2, 2, 31);
      } else if (p1 === 'q2') {
        startDateObj = new Date(p2, 3, 1);
        endDateObj = new Date(p2, 5, 30);
      } else if (p1 === 'q3') {
        startDateObj = new Date(p2, 6, 1);
        endDateObj = new Date(p2, 8, 30);
      } else if (p1 === 'q4') {
        startDateObj = new Date(p2, 9, 1);
        endDateObj = new Date(p2, 11, 31);
      } else {
        return;
      }
    } else {
      return;
    }

    const formatDate = (d: Date): string => {
      const dayStr = String(d.getDate()).padStart(2, '0');
      const monthStr = monthNames[d.getMonth()];
      const yearStr = d.getFullYear();
      return `${dayStr}-${monthStr}-${yearStr}`;
    };

    this.setStartDate(formatDate(startDateObj));
    this.setEndDate(formatDate(endDateObj));
  }

  setStartDate(date: string): void {
    this.statusBarState.startDate.set(date);
  }

  setEndDate(date: string): void {
    this.statusBarState.endDate.set(date);
  }

  setSelectedTimeRange(timeRange: string): void {
    this.statusBarState.selectedTimeRange.set(timeRange);
  }

  setCurrentDate(dateStr: string): void {
    this.statusBarState.currentDate.set(dateStr);
  }

  setStartHour(val: string): void {
    this.statusBarState.startHour.set(val);
    this.updateTimeRangeFromFields();
  }

  setStartMinute(val: string): void {
    this.statusBarState.startMinute.set(val);
    this.updateTimeRangeFromFields();
  }

  setEndHour(val: string): void {
    this.statusBarState.endHour.set(val);
    this.updateTimeRangeFromFields();
  }

  setEndMinute(val: string): void {
    this.statusBarState.endMinute.set(val);
    this.updateTimeRangeFromFields();
  }

  setActiveField(val: string): void {
    this.statusBarState.activeField.set(val);
  }

  setCpuHours(val: number): void {
    this.statusBarState.cpuHours.set(val);
  }

  setUsageHour(val: string): void {
    this.statusBarState.usageHour.set(val);
  }

  setUsageMinute(val: string): void {
    this.statusBarState.usageMinute.set(val);

  }

  setPercentile(val: number): void {
    this.statusBarState.percentile.set(val);
  }

  setLongDuration(val: number): void {
    this.statusBarState.longDuration.set(val);
  }

  updateTimeRangeFromFields(): void {
    const sh = this.startHour().padStart(2, '0');
    const sm = this.startMinute().padStart(2, '0');
    const eh = this.endHour().padStart(2, '0');
    const em = this.endMinute().padStart(2, '0');
    this.setSelectedTimeRange(`${sh}:${sm} - ${eh}:${em}`);
  }
}

