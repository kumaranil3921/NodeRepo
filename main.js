var http = require("http");
var mysql      = require('mysql');
/*http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);*/
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});
 
connection.connect();
 
connection.query('create table users(userID int, userName varchar(100))', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');