import { BaseManifest, ModuleModel } from '@core';

export class PlannerPortalManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 16,
            name: "Planner Portal",
            icon: "bi-calendar-event",
            list: [
                { id: 1, title: "WFL", icon: "bi bi-diagram-3", description: "WFL" },
                { id: 2, title: "License Request", icon: "bi bi-file-earmark-plus", description: "License Request" },
                { id: 3, title: "License Request Report", icon: "bi bi-file-earmark-bar-graph", description: "License Request Report" },
                { id: 4, title: "Estimation Sheet", icon: "bi bi-calculator", description: "Estimation Sheet" },
                { id: 5, title: "Time Sheet Report", icon: "bi bi-clock-history", description: "Time Sheet Report" },
                { id: 6, title: "Software Usage", icon: "bi bi-activity", description: "Software Usage" },
                { id: 7, title: "Software Status", icon: "bi bi-check2-circle", description: "Software Status" },
                { id: 8, title: "Upload Time Sheet", icon: "bi bi-upload", description: "Upload Time Sheet" },
                { id: 9, title: "Planner Access", icon: "bi bi-key-fill", description: "Planner Access" },
                { id: 10, title: "Project Access", icon: "bi bi-folder-check", description: "Project Access" },
                { id: 11, title: "License Request Access", icon: "bi bi-shield-check", description: "License Request Access" },
                { id: 12, title: "Department Project Access", icon: "bi bi-building-check", description: "Department Project Access" },
                { id: 13, title: "Department Access", icon: "bi bi-building-lock", description: "Department Access" },
                { id: 14, title: "Create Projects", icon: "bi bi-folder-plus", description: "Create Projects" },
                { id: 15, title: "Lock Software", icon: "bi bi-lock", description: "Lock Software" },
                { id: 16, title: "Map Software", icon: "bi bi-geo", description: "Map Software" },
                { id: 17, title: "Create Hours", icon: "bi bi-stopwatch", description: "Create Hours" },
                { id: 18, title: "Create Employees", icon: "bi bi-person-plus", description: "Create Employees" },
                { id: 19, title: "Create Department", icon: "bi bi-building-add", description: "Create Department" },
                { id: 20, title: "Recharge", icon: "bi bi-lightning-charge", description: "Recharge" }
            ]
        }
    ];
}
