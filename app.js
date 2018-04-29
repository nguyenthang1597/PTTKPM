var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var flash = require('connect-flash');

var mysql = require('./config/mysql')

var hbs = require('./config/express-handlebars');


require('dotenv').config()

var app = express();
var server = http.createServer(app);

require('./config/passport')(passport, mysql);


//config Express
require('./config/express')(app, express, session, hbs, logger, cookieParser, bodyParser, passport, flash);
//config Route
require('./routes/routes')(app);

require('./app/controllers/ImageController')(app);

server.listen(process.env.PORT, (err) => {
	if (err)
		console.log(err);
	else
		console.log('Server is running in localhost:' + process.env.PORT);
})

mysql.connect((err) => {
	if (err)
		console.log("Mysql connect fail");
	else
		console.log('Mysql connected');
})
