import { BaseManifest, ModuleModel } from '@core';

export class LicenseManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 5,
            name: "License",
            icon: "bi-safe",
            list: [
                { id: 1, title: "Organization", icon: "bi bi-buildings", description: "Organization" },
                { id: 2, title: "Organization By Week", icon: "bi bi-calendar-week", description: "Organization By Week" },
                { id: 3, title: "Organization By Year Month", icon: "bi bi-calendar-month", description: "Organization By Year Month" },
                { id: 4, title: "Division", icon: "bi bi-pie-chart", description: "Division" },
                { id: 5, title: "Department", icon: "bi bi-building", description: "Department" },
                { id: 6, title: "Group", icon: "bi bi-people-fill", description: "Group" },
                { id: 7, title: "My Feature", icon: "bi bi-star", description: "My Feature" },
                { id: 8, title: "Report Type 1", icon: "bi bi-file-earmark-text", description: "Report Type 1" },
                { id: 9, title: "Denial", icon: "bi bi-x-circle", description: "Denial" },
                { id: 10, title: "Borrow", icon: "bi bi-box-arrow-up-right", description: "Borrow" },
                { id: 11, title: "Usage", icon: "bi bi-graph-up-arrow", description: "Usage" },
                { id: 12, title: "User", icon: "bi bi-person", description: "User" },
                { id: 13, title: "Computer", icon: "bi bi-display", description: "Computer" },
                { id: 14, title: "Group Member", icon: "bi bi-person-lines-fill", description: "Group Member" },
                { id: 15, title: "License and Agent Combined", icon: "bi bi-intersect", description: "License and Agent Combined" },
                { id: 16, title: "Debug Data", icon: "bi bi-bug", description: "Debug Data" }
            ]
        }
    ];
}
