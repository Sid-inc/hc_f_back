import { BookViewModel } from 'models/bookViewModel';
import { BookCreateModel } from '../models/bookCreateModel';
import { v4 as uuid } from 'uuid';
import { books } from '../db/db';

export const booksRepository = {
  createBooks(books: BookCreateModel[])
  {
    for (const book of books) {
      this.createBook(book);
    }
  },

  createBook(book: BookCreateModel) {
    const newBook: BookViewModel = {
      id: uuid(),
      category: book.category,
      title: book.title,
      author: book.author,
      price: book.price,
      urlToImages: book.urlToImages,
      rating: book.rating,
      isBestSeller: book.isBestSeller,
      cover: book.cover,
      description: book.description,
      amount: book.amount,
    }

    books.push(newBook);
  },

  filterBooks() {
    console.log('aaaaa');
  }
}