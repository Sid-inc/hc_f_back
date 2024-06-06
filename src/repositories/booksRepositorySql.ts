import { BookCreateModel } from "../models/bookCreateModel";
import { v4 as uuid } from 'uuid';
import mysql from 'mysql';
import { BookViewModel } from "models/bookViewModel";

export const booksRepositorySql = {
  async createBook(book: BookCreateModel) {
    let request = "INSERT INTO `books` (`id`, `category`, `title`, `author`, `price`, `urltoimages`, `rating`, `isbestseller`, `cover`, `description`, `amount`) ";
    request += `VALUES ('${uuid()}', '${book.category}', '${book.title}', '${book.author}', '${book.price}', '${JSON.stringify(book.urlToImages)}', '${book.rating}', '${book.isBestSeller}', '${book.cover}', '${book.description}', '${book.amount}');`;

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
    const response = await executeSQL(request);
    console.log(response);
    const books:BookViewModel[] = [];

    // for (const item of response) {
    //   books.push({
    //     item.id,
    //     item.category,
    //     item.title,
    //     item.author,
    //     item.price,
    //     item.urlToImages,
    //     item.rating,
    //     item.isBestSeller,
    //     item.cover,
    //     item.description,
    //     item.amount,
    //   });
    // }
    return books;
  },

  async getItem(id: string): Promise<BookViewModel> {
    let request = "SELECT * FROM `books` WHERE id=";
    request += `'${}'`;
    const response = await executeSQL(request);

    const book: BookViewModel = {
          //     response.id,
    //     response.category,
    //     response.title,
    //     response.author,
    //     response.price,
    //     response.urlToImages,
    //     response.rating,
    //     response.isBestSeller,
    //     response.cover,
    //     response.description,
    //     response.amount,
    };
    return book;
  }
}

async function executeSQL(request: string): Promise<any> {
  const connection = mysql.createConnection(env.db);

  connection.connect((error) => {
    if (error) throw error;

    connection.query(request, function (err, result) {
      if (err) throw err;
      return result;
    });
  });
}

const env = {
  db: {
    host: 'localhost',
    user: 'user',
    password: 'password',
  }
}