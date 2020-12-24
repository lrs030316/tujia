const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '42.192.148.43',
  user: 'tujia',
  password: '123456',
  database: 'tujia',
  port:3306
});

module.exports = pool;
