import { BaseManifest, ModuleModel } from '@core';

export class MultiSiteManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 10,
            name: "Multi Site",
            icon: "bi-globe",
            list: [
                { id: 1, title: "Dashboard", icon: "bi bi-speedometer2", description: "Dashboard" },
                { id: 2, title: "License Organization", icon: "bi bi-buildings", description: "License Organization" },
                { id: 3, title: "License Usage", icon: "bi bi-graph-up", description: "License Usage" },
                { id: 4, title: "License Expiry", icon: "bi bi-clock-history", description: "License Expiry" },
                { id: 5, title: "Agent Dashboard", icon: "bi bi-pc-display", description: "Agent Dashboard" },
                { id: 6, title: "Agent Process Type 1", icon: "bi bi-gear-wide", description: "Agent Process Type 1" },
                { id: 7, title: "Agent User", icon: "bi bi-person-badge", description: "Agent User" },
                { id: 8, title: "Agent User Process Computer", icon: "bi bi-laptop", description: "Agent User Process Computer" },
                { id: 9, title: "Agent License Harvest", icon: "bi bi-box-arrow-in-down", description: "Agent License Harvest" },
                { id: 10, title: "Status", icon: "bi bi-activity", description: "Status" }
            ]
        }
    ];
}
