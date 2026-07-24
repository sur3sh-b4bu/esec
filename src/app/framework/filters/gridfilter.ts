export class GridFilterConfig{
    label:string;
    filterName:string;
    filterType:string;
    filterValue:string;
    options:any[];

    constructor(label:string,filterName:string,filterType:string,filterValue:string,options:any[]){
        this.label = label;
        this.filterName = filterName;
        this.filterType = filterType;
        this.filterValue = filterValue;
        this.options = options;
    }
}