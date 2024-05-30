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
      cover: Cover[book.cover as unknown as keyof typeof Cover],
      description: book.description,
      amount: book.amount,
    }

    books.push(newBook);
  },

  filterBooks() {
    console.log('aaaaa');
  }
}