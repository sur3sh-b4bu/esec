import { BaseManifest, ModuleModel } from '@core';

export class DashboardManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 1,
            name: "Dashboard",
            icon: "bi-speedometer2",
            list: [
                { id: 1, title: "Agent (Linux)", icon: "bi bi-terminal", description: "Agent (Linux)" },
                { id: 2, title: "Agent (Windows)", icon: "bi bi-windows",description: "Agent (Windows)"},
                { id: 3, title: "Configuration", icon: "bi bi-sliders", description: "Configuration" },
                { id: 4, title: "Consolidated Software Summary", icon: "bi bi-collection", description: "Consolidated Software Summary" },
                { id: 5, title: "Department", icon: "bi bi-building", description: "Department" },
                { id: 6, title: "Department Summary 1", icon: "bi bi-diagram-3", description: "Department Summary 1" },
                { id: 7, title: "Division", icon: "bi bi-pie-chart", description: "Division" },
                { id: 8, title: "On Cloud", icon: "bi bi-cloud", description: "On Cloud" },
                { id: 9, title: "On Prem", icon: "bi bi-hdd-rack", description: "On Prem" },
                { id: 10, title: "Process", icon: "bi bi-gear", description: "Process" },
                { id: 11, title: "Process Type 1", icon: "bi bi-gear-fill", description: "Process Type 1" },
                { id: 12, title: "Process Type 2", icon: "bi bi-gear-wide", description: "Process Type 2" },
                { id: 13, title: "Process Type 3", icon: "bi bi-gear-wide-connected", description: "Process Type 3" },
                { id: 14, title: "Software Inventory", icon: "bi bi-box-seam", description: "Software Inventory" },
                { id: 15, title: "Software Summary", icon: "bi bi-card-text", description: "Software Summary" },
                { id: 16, title: "Software Summary 1", icon: "bi bi-card-list", description: "Software Summary 1" },
                { id: 17, title: "Vendor-Expiry-Utilization", icon: "bi bi-hourglass-bottom", description: "Vendor-Expiry-Utilization" }
            ]
        }
    ];
}
