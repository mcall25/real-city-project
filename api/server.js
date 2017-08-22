/**
 * Created by codev on 7/27/17.
 */
'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var mysql = require('mysql');
const nodemailer = require('nodemailer');


var connection = mysql.createConnection({
  user     : 'root',
  password : 'root',
  host     : 'localhost',
  database : 'realcitydb'
});

connection.connect()


// var corsOptions = {
//   origin:'http://localhost:3000'
// }

const app = express()



// app.set('db', db);
// app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/src'));


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "callmichael.bus@gmail.com",
    pass: "watermelon1"
  }
});

// setup email data with unicode symbols
var mailOptions = {
  from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
  to: 'callmichael.bus@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world sent from the front end', // plain text body
  html: '<b>Hello world ?</b>' // html body
};


// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});


app.get('/email', function(req, res) {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.send(error);
      // return console.log(error);
    }
    else {
      // console.log('Message %s sent: %s', info.messageId, info.response);
      // return true
      res.send('Message %s sent: %s', info.messageId, info.response);
    }
  })
});

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
