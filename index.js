var express = require('express')
var bodyParser = require('body-parser')

var path = require('path')

// var corsOptions = {
//   origin: 'http://localhost:8080'
// }

var app = module.exports = express();



app.use(bodyParser.json())
// app.use(cors(corsOptions));
app.use("/node_modules", express.static(path.resolve(__dirname, './node_modules')));
app.use('/', express.static(__dirname + '/dist'));
app.all('*', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/dist'})
})

app.listen(8080, function(){
  console.log("got 'er listen' on", 8080);
})
