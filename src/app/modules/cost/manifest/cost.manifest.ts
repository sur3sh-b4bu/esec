import { BaseManifest, ModuleModel } from '@core';

export class CostManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 2,
            name: "Cost",
            icon: "bi-cash-coin",
            list: [
                { id: 1, title: "Organization", icon: "bi bi-buildings", description: "Organization" },
                { id: 2, title: "Division", icon: "bi bi-pie-chart", description: "Division" },
                { id: 3, title: "Department", icon: "bi bi-building", description: "Department" }
            ]
        }
    ];
}
