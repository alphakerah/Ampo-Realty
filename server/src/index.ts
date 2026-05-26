import express, { json, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routes/auth';
import { propertyRouter } from './routes/properties';
import { secureHeaders } from './middleware/security';

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(secureHeaders);

app.use('/api/auth', authRouter);
app.use('/api/properties', propertyRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'AMPO Realty API', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`AMPO Realty server running on http://localhost:${port}`);
});
