import { BaseManifest, ModuleModel } from '@core';

export class AssetManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 8,
            name: "Asset",
            icon: "bi-box-seam",
            list: [
                { id: 1, title: "Computer", icon: "bi bi-laptop", description: "Computer" },
                { id: 2, title: "File", icon: "bi bi-file-earmark", description: "File" },
                { id: 3, title: "Services", icon: "bi bi-gear-wide-connected", description: "Services" },
                { id: 4, title: "Shortcut Menu", icon: "bi bi-menu-button-wide", description: "Shortcut Menu" },
                { id: 5, title: "Print", icon: "bi bi-printer", description: "Print" }
            ]
        }
    ];
}
