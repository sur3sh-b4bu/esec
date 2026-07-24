import { BaseManifest, ModuleModel } from '@core';

export class ProjectPortalManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 20,
            name: "Project Portal",
            icon: "bi-briefcase",
            list: [
                { id: 1, title: "Recharge", icon: "bi bi-lightning-charge", description: "Recharge" },
                { id: 2, title: "Create Employees", icon: "bi bi-person-plus", description: "Create Employees" },
                { id: 3, title: "Create Projects", icon: "bi bi-folder-plus", description: "Create Projects" }
            ]
        }
    ];
}
