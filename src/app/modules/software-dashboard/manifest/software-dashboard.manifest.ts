import { BaseManifest, ModuleModel } from '@core';

export class SoftwareDashboardManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 19,
            name: "Software Dashboard",
            icon: "bi-display",
            list: [
                { id: 1, title: "Consolidated Software Summary", icon: "bi bi-collection", description: "Consolidated Software Summary" },
                { id: 2, title: "On Cloud", icon: "bi bi-cloud", description: "On Cloud" },
                { id: 3, title: "On Prem", icon: "bi bi-hdd-rack", description: "On Prem" },
                { id: 4, title: "Agent Usage Data", icon: "bi bi-graph-up-arrow", description: "Agent Usage Data" }
            ]
        }
    ];
}
