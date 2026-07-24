import { BaseManifest, ModuleModel } from '@core';

export class MyReportManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 4,
            name: "My Reports",
            icon: "bi-file-earmark-bar-graph",
            list: [
                { id: 1, title: "Usage", icon: "bi bi-graph-up-arrow", description: "Usage" },
                { id: 2, title: "Server", icon: "bi bi-hdd-rack", description: "Server" },
                { id: 3, title: "Feature", icon: "bi bi-star", description: "Feature" },
                { id: 4, title: "Division", icon: "bi bi-pie-chart", description: "Division" },
                { id: 5, title: "Department", icon: "bi bi-building", description: "Department" },
                { id: 6, title: "Group", icon: "bi bi-people", description: "Group" },
                { id: 7, title: "Report Type 1", icon: "bi bi-file-earmark-text", description: "Report Type 1" },
                { id: 8, title: "Agent (Windows)", icon: "bi bi-windows", description: "Agent (Windows)" },
                { id: 9, title: "Process", icon: "bi bi-gear", description: "Process" }
            ]
        }
    ];
}
