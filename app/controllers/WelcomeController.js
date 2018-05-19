var express = require('express');
var router = express.Router();

var Genre = require('../models/THELOAI');
var Book = require('../models/SACH');
var Author = require('../models/TACGIA');

router.get('/', (req, res) => {
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
                highlights: result
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
            for (i = 1; i <= pages.length / 6 + 1; i++)
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
    Book.getByIdIndex(req.params.id)
    .then(result => {
        console.log(result);
        res.render('user/chitietsach', {
            book: result
        });
    })
    .catch(err => {
        console.log(err);
    })
    
})

router.get('/tacgia', (req, res) => {
    let authors;
    Author.getAllIndex()
    .then(result => {
        var arr = [];
        while (result.length) arr.push(result.splice(0,4));
        authors = arr;
        res.render('user/tacgia', {
            authors: authors
        })
    })
})


module.exports = router;