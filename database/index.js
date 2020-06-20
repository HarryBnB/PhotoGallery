const mysql = require('mysql');
const config = require('../config.js');

module.exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.mysqlUser,
  password : config.mysqlPW,
  database : 'gallery'
});
