var AdminController = require('../app/controllers/AdminController');
var LoginController = require('../app/controllers/LoginController');
var AuthorController = require('../app/controllers/AuthorController');
var BookController = require('../app/controllers/BookController');
var GenreController = require('../app/controllers/GenreController');
var PublisherController = require('../app/controllers/PublisherController');
var LibrarianController = require('../app/controllers/LibrarianController');

var mw = require('../config/middleware');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'})
    })

    app.use('/admin', AdminController);

    app.use('/admin/author', mw.isLoggedInAdmin, AuthorController);
    app.use('/admin/book', mw.isLoggedInAdmin, BookController);
    app.use('/admin/genre', mw.isLoggedInAdmin, GenreController);
    app.use('/admin/publisher', mw.isLoggedInAdmin, PublisherController);
    app.use('/admin/librarian', mw.isLoggedInAdmin, mw.isSysAndAdminAccess, LibrarianController);

}         