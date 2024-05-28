import { books } from '../db/db';
import express, { Request, Response } from 'express';
import { BookViewModel } from "../models/bookViewModel";
import { BookGetModel } from "../models/getBookModel";
import { RequestWithParams } from "../models/types";



export const getBooksRoutes = () => {
  const router = express.Router();

  router.get('/', (req: Request, res: Response<BookViewModel[]>) => {
    res.send(books);
  });

  router.get('/:id', (req: RequestWithParams<BookGetModel>, res: Response<BookViewModel>) => {
    const bookId = +req.params.id;
    const book = books.find(b => b.id === bookId);
  
    if (book) {
      res.send(book);
    } else {
      res.sendStatus(404);
    }
  });
  
  return router;
}
