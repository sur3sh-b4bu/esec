import pool from '../config/db';
import { PROCEDURE_REGISTRY } from '../config/procedureRegistry';

export async function executeGenericProcedure(procedureKey: string, params: any[] = []) {
  const actualProcedure = PROCEDURE_REGISTRY[procedureKey];

  if (!actualProcedure) {
    throw new Error(`Unauthorized or unknown procedure key: ${procedureKey}`);
  }

  const placeholders = params.map(() => '?').join(', ');

  const [rows]: any = await pool.query(
    `CALL ${actualProcedure}(${placeholders});`,
    params
  );

  const resultRows = Array.isArray(rows) && Array.isArray(rows[0]) ? rows[0] : rows;
  console.log(`${actualProcedure} fetched rows:`, resultRows.length);

  return resultRows;
}
