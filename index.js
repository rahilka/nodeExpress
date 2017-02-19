var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
  console.log('Request url: ' + req.url);
  next();
})

app.get('/', function(req, res) {
  res.render('index', { ID: req.params.id });
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'Rahilka', lastname: 'Simonova' });
});

app.get('/person/:page/:id', function(req, res) {
  res.render('person', { ID: req.params.id , Qstr: req.query.qstr });
});

app.get('/api/person', jsonParser, function(req, res) {
  res.send({firstname: 'Rahilka'});
});

app.listen(port);
