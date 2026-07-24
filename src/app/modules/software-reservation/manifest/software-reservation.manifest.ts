import { BaseManifest, ModuleModel } from '@core';

export class SoftwareReservationManifest implements BaseManifest {
    module: ModuleModel[] = [
        {
            id: 17,
            name: "Software Reservation",
            icon: "bi-calendar-check",
            list: [
                { id: 1, title: "My Request", icon: "bi bi-file-earmark-person", description: "My Request" },
                { id: 2, title: "Approver", icon: "bi bi-person-check", description: "Approver" },
                { id: 3, title: "Create Group", icon: "bi bi-people-fill", description: "Create Group" },
                { id: 4, title: "Assign Approver", icon: "bi bi-person-gear", description: "Assign Approver" }
            ]
        }
    ];
}
