var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysqlConnection = require('./config/mysql')

require('dotenv').config()


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var server = http.createServer(app);

require('./config/express')(app, express, logger, cookieParser, bodyParser);


app.use('/', index);
app.use('/users', users);


server.listen(process.env.PORT, (err) => {
	if (err)
		console.log(err);
	else
		console.log('Server is running in localhost:' + process.env.PORT);
})

mysqlConnection.connect((err) => {
	if(err)
		console.log("Mysql connect fail");
	else
		console.log('Mysql connected');
})