var AdminController = require('../app/controllers/AdminController');
var LoginController = require('../app/controllers/LoginController');
var AuthorController = require('../app/controllers/AuthorController');
var BookController = require('../app/controllers/BookController');
var GenreController = require('../app/controllers/GenreController');
var PublisherController = require('../app/controllers/PublisherController');
var LibrarianController = require('../app/controllers/LibrarianController');
var AdminAccountController = require('../app/controllers/AdminAccountController');
var UserAccountController = require('../app/controllers/UserAccountController');
var WelcomController = require('../app/controllers/WelcomeController');
var ReaderController = require('../app/controllers/ReaderController');
var CardController = require('../app/controllers/CardController');
var BorrowBookController = require('../app/controllers/BorrowBookController');

var mw = require('../config/middleware');
module.exports = (app) => {
 
    app.use('/admin', AdminController);

    app.use('/admin/author', mw.isLoggedInAdmin, mw.isThuThuAccess, AuthorController);
    app.use('/admin/book', mw.isLoggedInAdmin, mw.isThuThuAccess, BookController);
    app.use('/admin/genre', mw.isLoggedInAdmin, mw.isThuThuAccess, GenreController);
    app.use('/admin/publisher', mw.isLoggedInAdmin, mw.isThuThuAccess, PublisherController);
    app.use('/admin/librarian', mw.isLoggedInAdmin, mw.isSysAndAdminAccess, LibrarianController);
    app.use('/admin/account', mw.isLoggedInAdmin, mw.isSysAndAdminAccess, AdminAccountController);
    app.use('/admin/reader', mw.isLoggedInAdmin, mw.isThuThuAccess, ReaderController);
    app.use('/admin/card', mw.isLoggedInAdmin, mw.isThuThuAccess, CardController);
    app.use('/admin/borrow', mw.isLoggedInAdmin, mw.isThuThuAccess, BorrowBookController);
    app.use('/admin/user-account', mw.isLoggedInAdmin, mw.isThuThuAccess, UserAccountController);

    app.use('/', WelcomController);
}         