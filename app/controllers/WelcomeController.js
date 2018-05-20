var express = require('express');
var router = express.Router();

var Genre = require('../models/THELOAI');
var Book = require('../models/SACH');
var Author = require('../models/TACGIA');
var Borrow = require('../models/MUONSACH');
var mw = require('../../config/middleware');
var LoginController = require('../controllers/LoginController');
var Reader = require('../models/DOCGIA');
var moment = require('moment');

router.get('/login', mw.LoggedUser, LoginController.formLogin);
router.post('/login', mw.LoggedUser, LoginController.userLogin);

router.get('/', (req, res) => {
    console.log(req.user);
    let genres;
    let books;
    let pages = [];
    let authors;
    Genre.getAllIndex()
        .then(result => {
            genres = result;
            return Book.getAllIndex();
        })
        .then(result => {
            var tmp = result;
            var arr = [];
            while (tmp.length) arr.push(tmp.splice(0, 3));
            books = arr;
            for (i = 1; i <= pages.length / 6 + 1; i++)
                pages.push(i);
            return Author.getAllIndex();

        })
        .then(result => {
            authors = result;

            return Book.getAllHighlight();

        })
        .then(result => {
            res.render('user/index', {
                genres: genres,
                books: books,
                pages: pages,
                page: 'HOME',
                authors: authors,
                highlights: result,
                user: req.user
            });
        })
})

router.get('/theloai', (req, res) => {
    let genres;
    let books;
    Genre.getAll()
        .then(result => {
            genres = result;
            return Book.getAllIndex();
        })
        .then(result => {
            var tmp = result;
            var arr = [];
            while (tmp.length) arr.push(tmp.splice(0, 3));
            books = arr;
            var pages = [];
            for (i = 1; i <= result.length / 6 + 1; i++)
                pages.push(i);
            res.render('user/theloai', {
                genres: genres,
                books: books,
                pages: pages,
                page: 'THELOAI'
            });
        })
})

router.get('/theloai/:MA_THELOAI', (req, res) => {
    let genres;
    let books;
    let pages = [];
    Genre.getAll()
        .then(result => {
            genres = result;
            return Book.getByGenre(req.params.MA_THELOAI);
        })
        .then(result => {
            var tmp = result;
            var arr = [];
            while (tmp.length) arr.push(tmp.splice(0, 3));
            books = arr;
            for (i = 1; i <= pages.length / 6 + 1; i++)
                pages.push(i);
            return Genre.getById(req.params.MA_THELOAI)

        })
        .then(result => {
            res.render('user/theloai', {
                genres: genres,
                books: books,
                pages: pages,
                genre: result.TEN,
                page: 'THELOAI'
            });
        })
})

router.get('/sach/:id', (req, res) => {
    let book;
    Book.getByIdIndex(req.params.id)
    .then(result => {
        book = result
        return Genre.getAll();
        
    })
    .then(result => {
        res.render('user/chitietsach', {
            book: book,
            genres: result
        });
    })
    .catch(err => {
        console.log(err);
    })
    
})

router.get('/tacgia', (req, res) => {
    let authors;
    let page = [];
    Author.getAllIndex()
    .then(result => {
        var arr = [];
        while (result.length) arr.push(result.splice(0,4));
        authors = arr;
        for(i=1;i <= result.length / 8 +1; i++)
            page.push(i)
        res.render('user/tacgia', {
            authors: authors,
            pages: page
        })
    })
})


router.get('/info', (req, res) =>{
    if(!req.user)
        return res.redirect('/login');
    Reader.getById(req.user.ID)
    .then(result => {
        console.log(result);
        res.render('user/info', {
            layout: 'user',
            info: result,
            page: 'info'
        })
    })
})

router.post('/info', (req, res) => {
    var info = {
        MA_DOCGIA: req.user.ID,
        TEN: req.body.TEN,
        NGAYSINH: moment(req.body.NGAYSINH).format('YYYY/MM/DD'),
        EMAIL: req.body.EMAIL,
        GIOITINH: req.body.GIOITINH,
        DIACHI: req.body.DIACHI,
        CMND: req.body.CMND
    }
    Reader.updateDOCGIA(info)
    .then(result => {
        res.redirect('/info');
    })
})

router.get('/muonsach', (req, res) => {
    let info;
    if(!req.user)
        res.redirect('/login');
    Reader.getById(req.user.ID)
    .then(result => {
        info = result;
        return Borrow.getBook(req.user.ID);
    })
    .then(result => {
        res.render('user/muonsach', {
            layout: 'user',
            books: result,
            info: info,
            page: 'muonsach'
        })
    })
})

router.get('/logout', LoginController.logout);


router.get('/tacgia/:id', (req, res) => {
    Author.getById(req.params.id)
    .then(result => {
        res.render('user/chitiettacgia', {
            author: result
        })
    })
})

module.exports = router;