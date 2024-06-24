import { BookCreateModel } from "../models/bookCreateModel";
import { v4 as uuid } from "uuid";
import mysql from "mysql";
import util from "util";
import { BookViewModel } from "models/bookViewModel";

export const booksRepository = {
  async createBook(book: BookCreateModel) {
    let request = "INSERT INTO `books` (`id`, `category`, `title`, `author`, `price`, `urltoimages`, `rating`, `isbestseller`, `cover`, `description`, `amount`) ";
    request += `VALUES ("${uuid()}", "${book.category}", "${book.title}", "${book.author}", "${book.price}", "${JSON.stringify(book.urlToImages)}", "${book.rating}", "${book.isBestSeller}", "${book.cover}", "${book.description}", "${book.amount}");`;

    await executeSQL(request);
  },

  async createBooks(newBooks: BookCreateModel[])
  {
    for (const book of newBooks) {
      await this.createBook(book);
    }
  },

  async getAll(): Promise<BookViewModel[]> {
    let request = "SELECT * FROM `books`";
    const response = await executeSQLGetAll(request);
    const books: BookViewModel[] = [];
    
    for (const item of response) {
      books.push({
        id: item.id,
        category: item.category,
        title: item.title,
        author: item.author,
        price: item.price,
        urlToImages: item.urlToImages,
        rating: item.rating,
        isBestSeller: item.isBestSeller,
        cover: item.cover,
        description: item.description,
        amount: item.amount,
      });
    }
    return books;
  },

  async getItem(id: string): Promise<BookViewModel> {
    let request = "SELECT * FROM `books` WHERE id=";
    request += `"${id}"`;
    const response = await executeSQLGetSingle(request);

    const book: BookViewModel = {
      id: response.id,
      category: response.category,
      title: response.title,
      author: response.author,
      price: response.price,
      urlToImages: response.urlToImages,
      rating: response.rating,
      isBestSeller: response.isBestSeller,
      cover: response.cover,
      description: response.description,
      amount: response.amount,
    };
    return book;
  }
}

async function executeSQL(request: string): Promise<void> {
  const connection = mysql.createConnection(env.db);

  connection.connect((error) => {
    if (error) throw error;

    connection.query(request, function (err, result) {
      if (err) throw err;
      return result;
    });
  });
}

async function executeSQLGetAll(request: string): Promise<any[]> {
  const connection = mysql.createConnection(env.db);
  let response: any[] = [];

  const q = util.promisify(connection.query).bind(connection);
  response = await q(request) as any[];

  return response;
}

async function executeSQLGetSingle(request: string): Promise<any> {
  const connection = mysql.createConnection(env.db);
  let response: any;

  const q = util.promisify(connection.query).bind(connection);
  response = await q(request) as any;

  return response[0];
}

const env = {
  db: {
    host: "localhost",
    user: "books_editor",
    password: "password",
    database: "books"
  }
}