var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();



const express = require("express")
// require("dotenv").config()
const app =express()
const port= process.env.PORT || 3306
const drugsRoute = require("./routes/drugroutes")

app.use(express.json());

app.use(drugsRoute);

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
  })



 
  app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });