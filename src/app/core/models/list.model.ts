import { ColDef } from 'ag-grid-community';

export interface ListInput {
    id:number;
    title: string;
    description?: string;
    apiEndpoint?: string;
    columnDefs?: ColDef[];
    component?: any;
    icon?: string;
}