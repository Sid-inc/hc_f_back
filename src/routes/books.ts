import { books } from '../db/db';
import { Request, Response, Router } from 'express';
import { BookViewModel } from '../models/bookViewModel';
import { BookGetModel } from '../models/getBookModel';
import { RequestWithBody, RequestWithParams } from '../models/types';
import { BookCreateModel } from '../models/bookCreateModel';
import { booksRepository } from '../repositories/booksRepository';

export const getBooksRoutes = () => {
  const router = Router();

  router.get('/', async (req: Request, res: Response<BookViewModel[]>) => {
    const books = await booksRepository.getAll();
    res.send(books);
  });

  // router.post('/', (req: RequestWithBody<BookCreateModel[]>, res: Response) => {
  //   if (req.body !== undefined && req.body.length) {
  //     booksRepository.createBooks(req.body);
  //     res.sendStatus(201);
  //   } else {
  //     res.sendStatus(404);
  //   }
  // });

  router.get('/:id', async (req: RequestWithParams<BookGetModel>, res: Response<BookViewModel>) => {
    const bookId = req.params.id;
    const book = await booksRepository.getItem(bookId);
  
    if (book) {
      res.status(200);
      res.send(book);
    } else {
      res.sendStatus(404);
    }
  });
  
  return router;
}
