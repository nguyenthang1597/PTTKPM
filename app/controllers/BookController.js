var express = require('express');
var router = express.Router();
var path = require('path')
var moment = require('moment');
var multer = require('multer');
var fs = require('fs')

var Book = require('../models/SACH.js');
var Publisher = require('../models/NXB');
var Author = require('../models/TACGIA');
var Book_Author = require('../models/DSTACGIA');
var Genre = require('../models/THELOAI');
var Book_Genre = require('../models/DSTHELOAI');

var storage = multer.diskStorage({
    destination: 'public/upload/book',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname.replace(' ', ''));
    }
})

var upload = multer({
    storage: storage
}).single('thumbnail');


var errorHandler = (req, res, message) => {
    if (req.file !== undefined) {
        let url_del = 'public/upload/book/' + req.file.filename;
        if (fs.existsSync(url_del)) {
            fs.unlinkSync(url_del)
        }
    }

    req.flash('errorMessage', message);
    res.redirect('/admin/book/list');
}


router.get('/list', (req, res) => {
    Book.getAll()
        .then(result => {
            res.render('admin/book/list', {
                layout: 'main-admin',
                title: 'Quản lý sách',
                heading: 'Danh sách sách',
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0],
                books: result
            })
        })
})

router.get('/edit/:id', (req, res) => {
    Book.getById(req.params.id)
        .then(book => {
            Publisher.getAll()
                .then(publishers => {
                    Author.getAll()
                        .then(authors => {
                            Genre.getAll()
                                .then(genres => {
                                    res.render('admin/book/edit', {
                                        layout: 'main-admin',
                                        title: 'Quản lý sách',
                                        heading: 'Sửa thông tin sách',
                                        message: req.flash('BookMessage')[0],
                                        book: book,
                                        publishers: publishers,
                                        authors: authors,
                                        genres: genres
                                    })
                                })
                        })
                })
        })
})

router.post('/edit/:id', (req, res) => {

    upload(req, res, (err) => {
        if (err) return console.log(err);
        Book.getById(req.params.id)
            .then(result => {
                var isHide = req.body.isHide ? 1 : 0;
                var isHighlight = req.body.isHighlight ? 1 : 0;
                var now = moment().format('YYYY/MM/DD');
                var NGAYNHAP = moment(result.NGAYNHAP, 'DD-MM-YYYY').format('YYYY/MM/DD');
                var book = {
                    'MA_SACH': result.MA_SACH,
                    'TEN': req.body.TEN,
                    'NXB': req.body.NXB,
                    'NGAYNHAP': NGAYNHAP,
                    'SOLUONG': req.body.SOLUONG,
                    'NAMXB': req.body.NAMXB,
                    'isHide': isHide,
                    'isHighlight': isHighlight,
                    'NGUOINHAP': result.NGUOINHAP == null ? '' : result.NGUOINHAP,
                    'NGAYCAPNHAT': now,
                    'SUMMARY': req.body.summary,
                    'CONTENT': req.body.content,
                }
                var info1 = {
                    'MA_SACH': result.MA_SACH,
                    'MA_TACGIA': req.body.MA_TACGIA
                }
                var info2 = {
                    MA_SACH: result.MA_SACH,
                    MA_THELOAI: req.body.MA_THELOAI
                }
                if (typeof req.file == 'undefined') {
                    book.picture = result.picture;
                } else
                    book.picture = req.file.filename;

                Book.updateSACH(book)
                    .then(result1 => {
                        Book_Author.update(info1)
                            .then(result2 => {
                                Book_Genre.update(info2)
                                    .then(result3 => {
                                        req.flash('successMessage', 'Sửa thông tin sách thành công!');
                                        res.redirect('/admin/book/list');
                                    })
                                    .catch(err => {
                                        errorHandler(req, res, 'Sửa thông tin sách không thành công!!!');
                                    })
                            })
                            .catch(err => {
                                errorHandler(req, res, 'Sửa thông tin sách không thành công!!!');
                            })
                    })
                    .catch(err => {
                        errorHandler(req, res, 'Sửa thông tin sách không thành công!!!');
                    })
            })

    })
})

router.get('/add', (req, res) => {
    Publisher.getAll()
        .then(publishers => {
            Author.getAll()
                .then(authors => {
                    Genre.getAll()
                        .then(genres => {
                            res.render('admin/book/add', {
                                layout: 'main-admin',
                                title: 'Quản lí sách',
                                heading: 'Thêm sách mới',
                                publishers: publishers,
                                authors: authors,
                                genres: genres
                            })
                        })

                })
        })
})

router.post('/add', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            req.flash('errorMessage', 'Thêm không thành công');
            res.redirect('/admin/book/list');
        }
        var now = moment().format('YYYY/MM/DD');
        var isHide = req.body.isHide ? 1 : 0;
        var isHighlight = req.body.isHighlight ? 1 : 0;
        var book = {
            'MA_SACH': req.body.MA_SACH,
            'TEN': req.body.TEN,
            'NXB': req.body.NXB,
            'NGAYNHAP': now,
            'SOLUONG': req.body.SOLUONG,
            'NAMXB': req.body.NAMXB,
            'isHide': isHide,
            'isHighlight': isHighlight,
            'NGUOINHAP': req.user.ID,
            'SUMMARY': req.body.summary,
            'CONTENT': req.body.content,
            'NGAYCAPNHAT': now
        }
        if (typeof req.file === 'undefined' || req.file === undefined) {
            book.picture = '';
        } else
            book.picture = req.file.filename;
        Book.addSACH(book)
            .then(result1 => {
                var DSTACGIA = {
                    MA_SACH: result1.insertId,
                    MA_TACGIA: req.body.MA_TACGIA
                }
                Book_Author.addNew(DSTACGIA)
                    .then(result2 => {
                        var DSTHELOAI = {
                            MA_SACH: result1.insertId,
                            MA_THELOAI: req.body.MA_THELOAI
                        }
                        Book_Genre.addNew(DSTHELOAI)
                            .then(result3 => {
                                req.flash('successMessage', 'Thêm sách mới thành công!!!');
                                res.redirect('/admin/book/list');
                            })
                            .catch(err => {
                                console.log(err);
                                Book.deleteById(result1.insertId);
                                errorHandler(req, res, 'Thêm sách mới không thành công!!!');
                            })
                    })
                    .catch(err => {
                        console.log(err);
                        Book.deleteById(result1.insertId);
                        errorHandler(req, res, 'Thêm sách mới không thành công!!!');
                    })
            })
            .catch(err => {
                console.log(err);
                errorHandler(req, res, 'Thêm sách mới không thành công!!!');
            })
    })
})



router.post('/delete', (req, res) => {
    let info;
    let id = req.body.id;
    let MA_TACGIA;
    if (req.xhr || req.header.accept.indexOf('json') > -1) {
        Book.getById(req.body.id)
            .then(result => {
                let url_del = 'public/upload/book/' + result.picture;
                if (fs.existsSync(url_del)) {
                    fs.unlinkSync(url_del)
                }
            })
        Book.getAuthor(id)
            .then(result => {
                MA_TACGIA = result.MA_TACGIA
            })
        Book_Author.deleteById(id)
            .then(result => {
                return Book_Genre.deleteById(id)
            })
            .then(result => {
                return Book.deleteById(id)
            })
            .then(result => {
                res.send('Xoá thành công!!!');
            })
            .catch(err => {
                res.send();
            })
    }
})

router.post('/update-visible', (req, res) => {
    if (req.xhr || req.header.accept.indexOf('json') > -1) {
        var info = {
            MA_SACH: req.body.id,
            isHide: req.body.hide == 'true' ? 1 : 0
        }
        console.log(info);
        Book.Hide(info)
            .then(result => {
                res.send('Update thanh cong');
            })
            .catch(err => {
                console.log(err);
                res.send();
            })

    }
})

router.post('/update-highlight', (req, res) => {
    if (req.xhr || req.header.accept.indexOf('json') > -1) {
        var info = {
            MA_SACH: req.body.id,
            isHighlight: req.body.highlight == 'true' ? 1 : 0
        }
        Book.Highlight(info)
            .then(result => {
                res.send('Update thanh cong');
            })
            .catch(err => {
                console.log(info);
                res.send();
            })

    }
})

router.get('/getbook/:id', (req, res) => {

    console.log(req.params);
    Book.getById(req.params.id)
        .then(result => {

            res.status(200).send(result);
        })


})

module.exports = router;