const MONTH_MAP: Record<string, string> = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
};

export function formatDateForMySQL(dateStr: string | undefined | null, fallback: string): string {
  if (!dateStr || typeof dateStr !== 'string') return fallback;
  const parts = dateStr.trim().split('-');
  if (parts.length !== 3) return fallback;

  let year: string;
  let month: string;
  let day: string;

  if (parts[0].length === 4) {
    // Format: YYYY-MM-DD or YYYY-MMM-DD
    year = parts[0];
    month = parts[1];
    day = parts[2];
  } else if (parts[2].length === 4) {
    // Format: DD-MM-YYYY or DD-MMM-YYYY
    day = parts[0];
    month = parts[1];
    year = parts[2];
  } else {
    return fallback;
  }

  const lowerMonth = month.toLowerCase();
  if (MONTH_MAP[lowerMonth]) {
    month = MONTH_MAP[lowerMonth];
  } else {
    month = month.padStart(2, '0');
  }

  day = day.padStart(2, '0');
  return `${year}-${month}-${day}`;
}
