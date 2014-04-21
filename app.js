
/**
 * Module dependencies.
 */

var express = require('express');
var todo = require('./routes/todo');
var http = require('http');
var path = require('path');
var training = require('./routes/ch_training');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/todos/:id', todo.getOne);
app.put('/todos/:id', todo.update);
app.delete('/todos/:id', todo.delete);
app.post('/todos', todo.insert);

app.get('/todoData', todo.getTestOne);
app.get('/todo', todo.index);

app.get('/ch1', training.chapter1);
app.get('/ch2', training.chapter2);
app.get('/ch3', training.chapter3);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
