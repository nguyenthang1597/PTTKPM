var AdminController = require('../app/controllers/AdminController');
var LoginController = require('../app/controllers/LoginController');
var AuthorController = require('../app/controllers/AuthorController');
var BookController = require('../app/controllers/BookController');

var mw = require('../config/middleware');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'})
    })

    app.use('/admin', AdminController);

    app.use('/admin/author', mw.isLoggedInAdmin, AuthorController);
    app.use('/admin/book', mw.isLoggedInAdmin, BookController);

}         