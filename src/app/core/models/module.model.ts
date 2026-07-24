import { ListInput } from "./list.model";

export interface ModuleModel {
    id: number;
    name: string;
    icon?: string;
    list: ListInput[];
}

export interface BaseManifest {
    module: ModuleModel[];
}