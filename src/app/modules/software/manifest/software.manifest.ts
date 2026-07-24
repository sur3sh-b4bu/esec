import { BaseManifest, ModuleModel } from '@core';

export class SoftwareManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 14,
            name: "Software",
            icon: "bi-code-slash",
            list: [
                { id: 1, title: "Actcad", icon: "bi bi-bounding-box-circles", description: "Actcad" },
                { id: 2, title: "Cosin", icon: "bi bi-cpu", description: "Cosin" },
                { id: 3, title: "Multi", icon: "bi bi-layers", description: "Multi" },
                { id: 4, title: "Pup", icon: "bi bi-box", description: "Pup" },
                { id: 5, title: "VCS", icon: "bi bi-git", description: "VCS" },
                { id: 6, title: "Windchill", icon: "bi bi-snow", description: "Windchill" },
                { id: 7, title: "XCrash", icon: "bi bi-exclamation-octagon", description: "XCrash" }
            ]
        }
    ];
}
