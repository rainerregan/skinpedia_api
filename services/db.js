import mysql from 'mysql2/promise.js';
import config from '../config.js';

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.query(sql, params);

  connection.end();

  return results;
}

export  {
  query
}