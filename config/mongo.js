var mongoose = require('mongoose');
var mongodb = 'mongodb://127.0.0.1:27017/QLTV';

mongoose.connect(mongodb);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb connection error'));

module.exports = db;