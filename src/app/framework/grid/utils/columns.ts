import { ColDef } from 'ag-grid-community';

export type ColumnDefInput = string | ColDef;

export function gridColumns(...fields: ColumnDefInput[]): ColDef[] {
  return fields.map(field => {
    if (typeof field === 'string') {
      return {
        headerName: formatHeaderName(field),
        field: field,
        width: 110
      };
    } else {

      const headerName = field.headerName || (field.field ? formatHeaderName(field.field) : '');
      return {
        headerName: headerName,
        width: 110,
        ...field
      };
    }
  });
}

function formatHeaderName(field: string): string {

  return field
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
