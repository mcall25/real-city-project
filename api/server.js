/**
 * Created by codev on 7/27/17.
 */
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var mysql = require('mysql');


var connection = mysql.createConnection({
  user     : 'root',
  password : 'root',
  host     : 'localhost',
  database : 'realcitydb'
});

connection.connect()


// var corsOptions = {
//   origin:'http://localhost:8000'
// }

const app = express()


// app.set('db', db);
// app.use(cors(corsOptions));

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/src'));


connection.query('SELECT * from Persons', function (err, rows, fields) {
  if (err) {
    throw err
  }
  else {
    console.log(rows)
  }

})

// app.get('/', function (req, res) {
//   connection.query("SELECT * FROM `Persons`;",function (error, row){
//     if(!error){
//       console.log(row);
//     }
//     else console.log("Error : "+err);
//   });
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
