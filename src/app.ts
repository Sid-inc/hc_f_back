import express from 'express';
import { getBooksRoutes } from './routes/books';

export const app = express();

app.use(express.json());
app.use('/books', getBooksRoutes());
