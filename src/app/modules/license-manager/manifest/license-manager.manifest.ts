import { BaseManifest, ModuleModel } from '@core';

export class LicenseManagerManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 13,
            name: "License Manager",
            icon: "bi-key",
            list: [
                { id: 1, title: "Vendor", icon: "bi bi-shop", description: "Vendor" },
                { id: 2, title: "Feature", icon: "bi bi-stars", description: "Feature" },
                { id: 3, title: "Feature View", icon: "bi bi-aspect-ratio", description: "Feature View" },
                { id: 4, title: "Checkout", icon: "bi bi-cart-check", description: "Checkout" },
                { id: 5, title: "Expiry", icon: "bi bi-hourglass-split", description: "Expiry" },
                { id: 6, title: "Denial", icon: "bi bi-shield-x", description: "Denial" },
                { id: 7, title: "Opt", icon: "bi bi-sliders", description: "Opt" },
                { id: 8, title: "Logs", icon: "bi bi-journal-code", description: "Logs" },
                { id: 9, title: "Service", icon: "bi bi-gear-wide-connected", description: "Service" },
                { id: 10, title: "Bentley", icon: "bi bi-building", description: "Bentley" }
            ]
        }
    ];
}
