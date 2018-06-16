const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const Genre = require('../model/Genre');
const Author = require('../model/Author');
const Info = require('../model/Info');
const Account = require('../model/Account');
const async = require('async');
const _ = require('lodash')
const mongoose = require('mongoose');
const mw = require('../../config/middleware');
const LoginController = require('./LoginController');
const moment = require('moment');
const Borrow = require('../model/Borrow');

router.get('/', (req, res) => {
    res.redirect('/page=1');
})

router.get('/page=:page', (req, res) => {
    async.parallel({
        books: (callback) => {
            Book.find({
                    isHide: false
                })
                .populate('TACGIA', 'TEN')
                .populate('THELOAI', 'TEN')
                .exec(callback)
        },
        authors: (callback) => {
            Author.find({
                isHide: false
            }, callback);
        },
        genres: (callback) => {
            Genre.find({
                isHide: false
            }, callback);
        },
        highlights: (callback) => {
            Book.find({
                isHighlight: true
            }, callback);
        }
    }, (err, result) => {
        var {
            books
        } = result;
        var listBook = _.chunk(books, 3);
        if (req.params.page) {
            listBook = _.slice(listBook, (req.params.page - 1) * 2, req.params.page * 2);
        } else
            listBook = _.slice(listBook, 0, 2);
        var pages = [];
        for (i = 0; i < books.length / 6; i++) {
            pages.push(i + 1);
        }
        if (err)
            console.log(err);
        else
            res.render('user/index', {
                books: listBook,
                authors: result.authors,
                genres: result.genres,
                highlights: result.highlights,
                pages: pages
            })
    })
})

router.get('/sach/:id', (req, res) => {
    async.parallel({
        authors: (callback) => {
            Author.find({
                isHide: false
            }, callback);
        },
        genres: (callback) => {
            Genre.find({
                isHide: false
            }, callback);
        },
        book: (callback) => {
            Book.findById(req.params.id)
                .populate('TACGIA', 'TEN')
                .populate('THELOAI', 'TEN')
                .exec(callback)
        }
    }, (err, result) => {
        console.log(result.book.TACGIA);
        res.render('user/bookdetail', {
            authors: result.authors,
            genres: result.genres,
            book: result.book
        })
    })
})

router.get('/theloai', (req, res) => {
    async.parallel({
        genres: (callback) => {
            Genre.find({}, callback)
        },
        books: (callback) => {
            Book.find({
                    isHide: false
                })
                .populate('TACGIA', 'TEN')
                .populate('THELOAI', 'TEN')
                .exec(callback)
        }
    }, (err, result) => {
        var books = result.books;
        books = _.chunk(books, 3);
        res.render('user/genre', {
            genres: result.genres,
            books: books,
            page: 'THELOAI'
        });
    })
})


router.get('/theloai/:id', (req, res) => {
    async.parallel({
        genres: (callback) => {
            Genre.find({}, callback)
        },
        genre: (callback) => {
            Genre.findById(req.params.id, callback);
        },
        books: (callback) => {
            Book.find({
                    isHide: false,
                    THELOAI: mongoose.Types.ObjectId(req.params.id)
                })
                .populate('TACGIA', 'TEN')
                .populate('THELOAI', 'TEN')
                .exec(callback)
        },
    }, (err, result) => {
        var books = result.books;
        books = _.chunk(books, 3);
        res.render('user/genre', {
            genres: result.genres,
            books: books,
            genre: result.genre.TEN,
            page: 'THELOAI'
        });
    })
})

router.get('/tacgia', (req, res) => {
    Author.find({}, (err, result) => {
        var authors = _.chunk(result, 4);
        res.render('user/author', {
            authors: authors,
            page: 'TACGIA'
        })
    })
})

router.get('/tacgia/:id', (req, res) => {
    Author.findById(req.params.id, (err, result) => {
        res.render('user/authordetail', {
            author: result
        })
    })
})

router.get('/info', (req, res) => {
    if (!req.user)
        return res.redirect('/login');
    Info.findById(req.user.info, (err, result) => {
        var {NGAYSINH} = result;
        NGAYSINH = moment(NGAYSINH).format('YYYY-MM-DD');
        res.render('user/info', {
            layout: 'info',
            NGAYSINH: NGAYSINH,
            info: result,
            page: 'info'
        })
    })
})

router.post('/info', (req, res) => {
    var info = {
        TEN: req.body.TEN,
        NGAYSINH: req.body.NGAYSINH,
        EMAIL: req.body.EMAIL,
        GIOITINH: req.body.GIOITINH,
        DIACHI: req.body.DIACHI,
        CMND: req.body.CMND
    }
    Info.findById(req.user.info, (err, result) => {
        if(!result){
            Info.create(info)
            .then(INFO => {
                console.log(INFO);
                Account.findOneAndUpdate({username: req.user.username}, {
                    info: mongoose.Types.ObjectId(INFO._id)
                }, (err, result) => {
                    if(err){
                        console.log(err);
                        req.flash('errorMessage', 'Cập nhật không thành công!');
                        res.redirect('/info');
                    }else{
                        req.flash('successMessage', 'Cập nhật thành công!');
                        res.redirect('/info')
                    }
                })
            })
        }
        else{
            Info.findByIdAndUpdate(req.user.info, {
                TEN: info.TEN,
                NGAYSINH: info.NGAYSINH,
                EMAIL: info.EMAIL,
                GIOITINH: info.GIOITINH,
                DIACHI: info.DIACHI,
                CMND: info.CMND
            }, (err, result) => {
                if(err){
                    console.log(err);
                    req.flash('errorMessage', 'Cập nhật không thành công!');
                    res.redirect('/info');
                }else{
                    req.flash('successMessage', 'Cập nhật thành công!');
                    res.redirect('/info')
                }
            })
        }
    })
})

router.get('/muonsach', mw.isLoggedInUser, (req, res) => {
    async.parallel({
        borrow: (callback) => {
            Borrow.find({})
            .populate('THE', null,null, {DOCGIA: mongoose.Types.ObjectId(req.user.info)})
            .populate('SACH', 'TEN')
            .exec(callback)
        },
        info: (callback) => {
            Info.findById(req.user.info)
            .exec(callback)
        }
    }, (err, result) => {
        res.render('user/borrow', {
            layout: 'info',
            books: result.borrow,
            info: result.info

        })
    })
})




router.get('/login', mw.LoggedUser, LoginController.formLogin);
router.post('/login', mw.LoggedUser, LoginController.userLogin);

router.get('/logout', LoginController.logout);
module.exports = router;