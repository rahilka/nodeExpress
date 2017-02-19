var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
  console.log('Request url: ' + req.url);
  next();
})

app.get('/', function(req, res) {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World with express!!!</h1></body></html>');
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'Rahilka', lastname: 'Simonova' });
});

app.get('/person/:page/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' +
            req.params.id + ' ' + req.params.page + '</h1></body></html>');
});

app.listen(port);
