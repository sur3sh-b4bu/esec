import { Injectable, signal } from "@angular/core";

export interface status {
  time: boolean;
  parameter: boolean;
  selectedPeriod?: string;
  startDate?: string;
  endDate?: string;
  selectedTimeRange?: string;
  currentDate?: string;
  startHour?: string;
  startMinute?: string;
  endHour?: string;
  endMinute?: string;
  activeField?: string;
  cpuHours?: number;
  usageHour?: string;
  usageMinute?: string;
  percentile?: number;
  longDuration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatusBarState {
  time = signal<boolean>(false);
  parameter = signal<boolean>(false);
  selectedPeriod = signal<string>('360');
  startDate = signal<string>('01-Feb-2021');
  endDate = signal<string>('29-Jun-2026');
  selectedTimeRange = signal<string>('08:00 - 17:00');
  currentDate = signal<string>('');

  // Time Signals
  startHour = signal<string>('08');
  startMinute = signal<string>('00');
  endHour = signal<string>('17');
  endMinute = signal<string>('00');
  activeField = signal<string>('startHour');

  // Parameters Signals
  cpuHours = signal<number>(24);
  usageHour = signal<string>('10');
  usageMinute = signal<string>('30');
  percentile = signal<number>(95);
  longDuration = signal<number>(8);
  usageTime = signal<number>(10.5);
}

