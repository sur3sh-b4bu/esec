import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SubFilterBarState {
  subTab = signal<string>('');
}