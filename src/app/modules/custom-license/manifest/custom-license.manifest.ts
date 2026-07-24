import { BaseManifest, ModuleModel } from '@core';

export class CustomLicenseManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 15,
            name: "Custom License",
            icon: "bi-file-earmark-lock",
            list: [
                { id: 1, title: "Division Hours Used", icon: "bi bi-clock-history", description: "Division Hours Used" },
                { id: 2, title: "Division License Hours Used", icon: "bi bi-key-fill", description: "Division License Hours Used" },
                { id: 3, title: "Division Teamcenter Hours Used", icon: "bi bi-diagram-2-fill", description: "Division Teamcenter Hours Used" },
                { id: 4, title: "Department Hours Used", icon: "bi bi-hourglass-split", description: "Department Hours Used" },
                { id: 5, title: "Department License Hours Used", icon: "bi bi-file-earmark-code", description: "Department License Hours Used" },
                { id: 6, title: "Department Teamcenter Hours Used", icon: "bi bi-diagram-3-fill", description: "Department Teamcenter Hours Used" },
                { id: 7, title: "Software", icon: "bi bi-code-square", description: "Software" }
            ]
        }
    ];
}
