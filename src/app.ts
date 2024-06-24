import express from 'express';
import { getBooksRoutes } from './routes/books';
import { requestLogger } from './requestLogger';

export const app = express();

app.use(requestLogger);
app.use(express.json());
app.use('/books', getBooksRoutes());
