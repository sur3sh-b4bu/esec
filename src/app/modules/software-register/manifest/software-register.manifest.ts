import { BaseManifest, ModuleModel } from '@core';

export class SoftwareRegisterManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 11,
            name: "Software Register",
            icon: "bi-journal-bookmark",
            list: [
                { id: 1, title: "Software Register", icon: "bi bi-journal-text", description: "Software Register" },
                { id: 2, title: "Software Utilization Month", icon: "bi bi-calendar-month", description: "Software Utilization Month" },
                { id: 3, title: "Node Locked", icon: "bi bi-lock-fill", description: "Node Locked" }
            ]
        }
    ];
}
