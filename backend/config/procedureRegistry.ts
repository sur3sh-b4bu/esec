/**
 * PROCEDURE_REGISTRY serves as an optional alias map for legacy keys.
 * New procedures do NOT need to be added here; component datasources (*.ds.ts)
 * can specify their stored procedure key or full name (e.g., 'esms_m.r_custom_proc') directly,
 * and the backend will dynamically resolve and execute them.
 */
export const PROCEDURE_REGISTRY: Record<string, string> = {};