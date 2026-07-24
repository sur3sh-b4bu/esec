import { Component, inject, computed } from '@angular/core';
import { SideBarService } from '@framework/layout/services/side-bar.service';
import { Chatbot } from './chatbot/chatbot';

@Component({
  selector: 'app-chatbot',
  imports: [
    Chatbot
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbots {
  private sideBarService = inject(SideBarService);
  activeSubTab = computed(() => this.sideBarService.activeTabTitle());
}
