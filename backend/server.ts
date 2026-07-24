import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '.env') });

import express from 'express';
import cors from 'cors';
import logsRouter from './routes/logsRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', logsRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});