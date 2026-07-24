import { BaseManifest, ModuleModel } from '@core';

export class AdminManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 12,
            name: "Admin",
            icon: "bi-gear",
            list: [
                { id: 1, title: "Access Control", icon: "bi bi-shield-lock", description: "Access Control" },
                { id: 2, title: "Agent", icon: "bi bi-building", description: "Agent" },
                { id: 3, title: "Agent Install", icon: "bi bi-download", description: "Agent Install" },
                { id: 4, title: "Cloud", icon: "bi bi-cloud", description: "Cloud" },
                { id: 5, title: "Data Process", icon: "bi bi-cpu", description: "Data Process" },
                { id: 6, title: "Department Summary 1", icon: "bi bi-diagram-3", description: "Department Summary 1" },
                { id: 7, title: "ESEC Preferences", icon: "bi bi-sliders", description: "ESEC Preferences" },
                { id: 8, title: "GDPR", icon: "bi bi-file-earmark-check", description: "GDPR" },
                { id: 9, title: "Holiday", icon: "bi bi-calendar-event", description: "Holiday" },
                { id: 10, title: "License", icon: "bi bi-key", description: "License" },
                { id: 11, title: "License Cost", icon: "bi bi-currency-dollar", description: "License Cost" },
                { id: 12, title: "Multi Site", icon: "bi bi-globe", description: "Multi Site" },
                { id: 13, title: "Software", icon: "bi bi-code-slash", description: "Software" },
                { id: 14, title: "Software Compliance", icon: "bi bi-check-circle", description: "Software Compliance" },
                { id: 15, title: "Software Inventory", icon: "bi bi-box-seam", description: "Software Inventory" },
                { id: 16, title: "Software Register", icon: "bi bi-journal-text", description: "Software Register" },
                { id: 17, title: "Software Register 1", icon: "bi bi-journal-bookmark", description: "Software Register 1" },
                { id: 18, title: "Teamcenter", icon: "bi bi-diagram-2", description: "Teamcenter" },
                { id: 19, title: "User", icon: "bi bi-people", description: "User" }
            ]
        }
    ];
}
