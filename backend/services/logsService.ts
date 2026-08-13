import pool from '../config/db';
import { PROCEDURE_REGISTRY } from '../config/procedureRegistry';

export async function executeGenericProcedure(procedureKey: string, params: any[] = []) {
  if (!procedureKey || typeof procedureKey !== 'string') {
    throw new Error('Procedure key must be a non-empty string.');
  }

  // Sanitize procedureKey to allow only alphanumeric characters, underscores, and dots
  const sanitizedKey = procedureKey.trim();
  if (!/^[a-zA-Z0-9_.]+$/.test(sanitizedKey)) {
    throw new Error(`Invalid procedure key format: "${procedureKey}"`);
  }

  let actualProcedure = PROCEDURE_REGISTRY[sanitizedKey] || sanitizedKey;

  const safeParams = Array.isArray(params) ? params : [];
  const placeholders = safeParams.map(() => '?').join(', ');

  const [rows]: any = await pool.query(
    `CALL ${actualProcedure}(${placeholders});`,
    safeParams
  );

  const resultRows = Array.isArray(rows) && Array.isArray(rows[0]) ? rows[0] : rows;
  console.log(`[DB] ${actualProcedure} fetched ${Array.isArray(resultRows) ? resultRows.length : 0} rows`);

  return resultRows;
}
