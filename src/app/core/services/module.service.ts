import { Injectable, inject } from "@angular/core";
import { ModuleRegistry } from "../registry/module.registry";
import { BaseManifest } from "../models/module.model";

@Injectable({
    providedIn: "root"
})

export class ModuleService {

    private moduleRegistry = inject(ModuleRegistry);

    getModules(): BaseManifest[] {
        return this.moduleRegistry.modules;
    }
}
