import { BookCreateModel } from "../models/bookCreateModel";
import { v4 as uuid } from 'uuid';
import mysql from 'mysql';

export const booksRepositorySql = {
  async createBook(book: BookCreateModel) {
    let request = 'INSERT INTO `books` (`id`, `category`, `title`, `author`, `price`, `urltoimages`, `rating`, `isbestseller`, `cover`, `description`, `amount`) ';
    request += `VALUES ('${uuid()}', '${book.category}', '${book.title}', '${book.author}', '${book.price}', '${JSON.stringify(book.urlToImages)}', '${book.rating}', '${book.isBestSeller}', '${book.cover}', '${book.description}', '${book.amount}');`;

    await executeSQL(request);
  },

  async createBooks(newBooks: BookCreateModel[])
  {
    for (const book of newBooks) {
      await this.createBook(book);
    }
  },
}

async function executeSQL(request: string) {
  const connection = mysql.createConnection(env.db);

  connection.connect((error) => {
    if (error) throw error;

    connection.query(request, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
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