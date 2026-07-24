import { BaseManifest, ModuleModel } from '@core';

export class BillingManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 3,
            name: "Billing",
            icon: "bi-receipt",
            list: [
                { id: 1, title: "Division", icon: "bi bi-pie-chart", description: "Division" },
                { id: 2, title: "Department", icon: "bi bi-building", description: "Department" },
                { id: 3, title: "Summary", icon: "bi bi-file-text", description: "Summary" }
            ]
        }
    ];
}
