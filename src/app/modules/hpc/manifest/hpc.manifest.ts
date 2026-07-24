import { BaseManifest, ModuleModel } from '@core';

export class HpcManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 9,
            name: "HPC",
            icon: "bi-server",
            list: [
                { id: 1, title: "CPU Status", icon: "bi bi-cpu", description: "CPU Status" },
                { id: 2, title: "Job List", icon: "bi bi-list-task", description: "Job List" },
                { id: 3, title: "Current Status", icon: "bi bi-activity", description: "Current Status" },
                { id: 4, title: "Server Usage", icon: "bi bi-server", description: "Server Usage" }
            ]
        }
    ];
}
