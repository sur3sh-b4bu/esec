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
app.use((req,res) => {
  res.status(404).json({ error: 'Not found' });
})
app.use((error:any, req:express.Request, res:express.Response, next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
})

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try{
    console.log(`Server is running on port ${port}`);
  }
  catch(error){
    console.error('Error starting server:', error);
  }

});
