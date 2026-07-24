import { ColDef } from 'ag-grid-community';

export interface PivotConfig {
  rowGroupKey: string;      // Vertical axis (e.g., 'country')
  pivotKey: string;         // Horizontal axis columns (e.g., 'year')
  valueKey: string;         // Numeric cell data (e.g., 'sales')
  aggFunc?: 'sum' | 'avg';  // Math operation (Defaults to sum)
}

export class CustomPivotEngine {
  
  static process(rawData: any[], config: PivotConfig): { rowData: any[], columnDefs: ColDef[] } {
    const { rowGroupKey, pivotKey, valueKey, aggFunc = 'sum' } = config;
    
    const rowMap: Record<string, any> = {};
    const uniquePivotHeaders = new Set<string>();

    // 1. Group rows and pivot the horizontal keys
    rawData.forEach(item => {
      const rowGroupValue = item[rowGroupKey];
      const pivotColumnValue = String(item[pivotKey]);
      const dataValue = Number(item[valueKey] || 0);

      uniquePivotHeaders.add(pivotColumnValue);

      // Initialize the row object if it doesn't exist
      if (!rowMap[rowGroupValue]) {
        rowMap[rowGroupValue] = { [rowGroupKey]: rowGroupValue };
      }

      // Aggregate values if the column already has data
      if (rowMap[rowGroupValue][pivotColumnValue] !== undefined) {
        if (aggFunc === 'sum') {
          rowMap[rowGroupValue][pivotColumnValue] += dataValue;
        } else if (aggFunc === 'avg') {
          // Note: For a strict average, you'd track item counts. 
          rowMap[rowGroupValue][pivotColumnValue] = (rowMap[rowGroupValue][pivotColumnValue] + dataValue) / 2;
        }
      } else {
        rowMap[rowGroupValue][pivotColumnValue] = dataValue;
      }
    });

    // 2. Generate the rowData array for AG Grid
    const rowData = Object.values(rowMap);

    // 3. Automatically build dynamic column definitions
    const dynamicColumns: ColDef[] = Array.from(uniquePivotHeaders)
      .sort()
      .map(headerName => ({
        field: headerName,
        headerName: headerName,
        valueFormatter: params => params.value !== undefined ? params.value : 0 // Handle empty cells
      }));

    // 4. Combine the static row key column with the dynamic headers
    const columnDefs: ColDef[] = [
      { field: rowGroupKey, headerName: rowGroupKey.toUpperCase(), pinned: 'left' },
      ...dynamicColumns
    ];

    return { rowData, columnDefs };
  }
}
