import { BaseManifest, ModuleModel } from '@core';

export class ComplianceManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 21,
            name: "Compliance",
            icon: "bi-shield-check",
            list: [
                { id: 1, title: "Software Compliance", icon: "bi bi-patch-check", description: "Software Compliance" },
                { id: 2, title: "Communication Port", icon: "bi bi-ethernet", description: "Communication Port" }
            ]
        }
    ];
}
