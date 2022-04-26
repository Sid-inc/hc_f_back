const mysql = require('mysql2/promise');
const DB = require('./dbSettings');

async function dbquery(requestString) {
  const connection = await mysql.createConnection(DB);
  const [ rows, fields ] = await connection.execute(requestString);
  connection.end();
  return rows;
}

module.exports = dbquery;
