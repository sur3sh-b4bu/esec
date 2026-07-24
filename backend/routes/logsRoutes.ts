import { Router } from 'express';
import { executeProcedureHandler } from '../controllers/logsController';

const router = Router();

router.post('/execute', executeProcedureHandler);

export default router;
