import { BookViewModel, Cover } from '../models/bookViewModel';
import { BookCreateModel } from '../models/bookCreateModel';
import { v4 as uuid } from 'uuid';
import { books } from '../db/db';

export const booksRepository = {
  createBooks(newBooks: BookCreateModel[])
  {
    for (const book of newBooks) {
      this.createBook(book);
    }
  },

  createBook(book: BookCreateModel): void {
    const newBook: BookViewModel = {
      id: uuid(),
      category: book.category,
      title: book.title,
      author: book.author,
      price: book.price,
      urlToImages: book.urlToImages,
      rating: book.rating,
      isBestSeller: book.isBestSeller,
      cover: book.cover === "Paperback" ? Cover.PAPERBACK : Cover.HARDCOVER,
      description: book.description,
      amount: book.amount,
    }

    books.push(newBook);
  },

  getAll(): BookViewModel[] {
    return books;
  },

  getItem(id: string): BookViewModel | undefined {
    return books.find(b => b.id === id);
  },

  filterBooks() {
    console.log('aaaaa');
  },
}