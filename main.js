var http = require("http");
var express = require('express')
var mysql = require('mysql')
//var path= require('path')

var app=express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});
//connection.connect();
app.get('/about',function(req,res)
{
    res.send("about");

});
app.get('/',function(req,res)
{
   res.send("home");

});

app.get('/:uid',function(req,res)
{
    connection.query('SELECT * from student where stuID='+req.params.uid, function(err, rows, fields) {
    if (!err)
    {
      if(rows.length!=0)
        res.send('The solution is: '+JSON.stringify(rows,'utf8'));
      //connection.end();
      else
      {
          res.send("no data")
      }
    }
    else
    {
        res.end('can not get');
        //res.redirect("index.html");
      //  res.end();
    }
});
//connection.end();

});

app.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
