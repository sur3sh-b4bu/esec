import { ColDef } from 'ag-grid-community';

export type ColumnDefInput = string | ColDef;

export function gridColumns(...fields: ColumnDefInput[]): ColDef[] {
  return fields.map(field => {
    if (typeof field === 'string') {
      return {
        headerName: formatHeaderName(field),
        field: field,
      };
    } else {

      const headerName = field.headerName || (field.field ? formatHeaderName(field.field) : '');
      return {
        headerName: headerName,
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

export function statusPercentFormatter(params: any): string {
  if (params.value === undefined || params.value === null || params.value === '') return '';
  const val = Number(params.value);
  if (isNaN(val)) return '';
  let dot = '🟢';
  if (val >= 80) dot = '🔴';
  else if (val >= 60) dot = '🟡';
  return `${dot} ${val.toFixed(1)}`;
}
