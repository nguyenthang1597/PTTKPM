var express = require('express');
var router = express.Router();

var Genre = require('../models/THELOAI');
var Book = require('../models/SACH');


router.get('/', (req, res) => {
    let genres;
    let books;
    Genre.getAll()
    .then(result => {
        genres = result;
        return Book.getAll();
    })
    .then(result => {
        var tmp = result;
        var arr = [];
        while(tmp.length) arr.push(tmp.splice(0,3));
        books = arr;
        var pages = [];
        for(i=1;i<=pages.length/6 + 1;i++)
            pages.push(i);
        res.render('user/index', {
            genres: genres,
            books: books,
            pages: pages,
            page: 'HOME'
        });
    })
})

router.get('/theloai', (req, res) => {
    let genres;
    let books;
    Genre.getAll()
    .then(result => {
        genres = result;
        return Book.getAll();
    })
    .then(result => {
        var tmp = result;
        var arr = [];
        while(tmp.length) arr.push(tmp.splice(0,3));
        books = arr;
        var pages = [];
        for(i=1;i<=pages.length/6 + 1;i++)
            pages.push(i);
        res.render('user/index', {
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
        while(tmp.length) arr.push(tmp.splice(0,3));
        books = arr;
        for(i=1;i<=pages.length/6 + 1;i++)
            pages.push(i);
        return Genre.getById(req.params.MA_THELOAI)
        
    })
    .then(result=> {
        res.render('user/theloai', {
            genres: genres,
            books: books,
            pages: pages,
            genre: result.TEN,
            page: 'THELOAI'
        });
    })
})
module.exports = router;