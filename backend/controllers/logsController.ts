import { Request, Response } from 'express';
import { executeGenericProcedure } from '../services/logsService';

export async function executeProcedureHandler(req: Request, res: Response) {
    try {
        const { procedureKey, params } = req.body;

        if (!procedureKey) {
            return res.status(400).json({ error: 'procedureKey is required' });
        }

        const rows = await executeGenericProcedure(procedureKey, params || []);
        res.json(rows);
    } catch (err: any) {
        console.error('Error executing procedure:', err);
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
}

