import { BaseManifest, ModuleModel } from '@core';

export class ChatbotManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 18,
            name: "Chatbot",
            icon: "bi-chat-dots",
            list: [
                { id: 1, title: "Chatbot", icon: "bi bi-robot", description: "Chatbot" }
            ]
        }
    ];
}
