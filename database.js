require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'root',       
  password: process.env.DB_PASS || 'Vinay@6378',  
  database: process.env.DB_NAME || 'BloodBank',
  port: process.env.DB_PORT || 3306
});
connection.connect((err) => {
  if (err) {
      console.error('Error connecting to the database:');
      return;
  }
  console.log('Connected to the database');
});
module.exports = connection;
