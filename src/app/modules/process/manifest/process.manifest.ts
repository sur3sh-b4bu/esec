import { BaseManifest, ModuleModel } from '@core';

export class ProcessManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 7,
            name: "Process",
            icon: "bi-cpu",
            list: [
                { id: 1, title: "User Process Computer", icon: "bi bi-laptop", description: "User Process Computer" },
                { id: 2, title: "User Process", icon: "bi bi-gear-wide-connected", description: "User Process" },
                { id: 3, title: "User Computer", icon: "bi bi-pc-display", description: "User Computer" },
                { id: 4, title: "User", icon: "bi bi-person", description: "User" },
                { id: 5, title: "Computer Process", icon: "bi bi-cpu", description: "Computer Process" },
                { id: 6, title: "Exe Usage", icon: "bi bi-file-earmark-binary", description: "Exe Usage" },
                { id: 7, title: "Software Usage", icon: "bi bi-activity", description: "Software Usage" },
                { id: 8, title: "Process Id", icon: "bi bi-hash", description: "Process Id" },
                { id: 9, title: "Website", icon: "bi bi-globe2", description: "Website" },
                { id: 10, title: "License Harvest", icon: "bi bi-box-arrow-in-down", description: "License Harvest" },
                { id: 11, title: "License Harvest Summary", icon: "bi bi-journal-check", description: "License Harvest Summary" }
            ]
        }
    ];
}
