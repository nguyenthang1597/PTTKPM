
var express = require('express');
var router = express.Router();
var path = require('path')
var moment = require('moment');
var multer = require('multer');

var Book = require('../models/SACH.js')
var Publisher = require('../models/NXB');


var storage = multer.diskStorage({
    destination: 'public/upload/book',
    filename: function (req, file, cb) {
        cb(null, req.params.id + '_' + 'thumbnail' + '_' + file.originalname)
    }
})

var upload = multer({ storage: storage }).single('thumbnail');

router.get('/list', (req, res) => {
    Book.getAll()
        .then(result => {
            res.render('admin/book/list', {
                layout: 'main-admin',
                title: 'Quản lý sách',
                heading: 'Danh sách sách',
                message: req.flash('BookMessage')[0],
                books: result
            })
        })
})

router.get('/edit/:id', (req, res) => {
    Book.getById(req.params.id)
        .then(book => {
            Publisher.getAll()
                .then(publishers => {
                    res.render('admin/book/edit', {
                        layout: 'main-admin',
                        title: 'Quản lý sách',
                        heading: 'Sửa thông tin sách',
                        message: req.flash('BookMessage')[0],
                        book: book,
                        publishers: publishers
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
                    MA_SACH: result.MA_SACH,
                    TEN: req.body.TEN,
                    NXB: req.body.NXB,
                    NGAYNHAP: NGAYNHAP,
                    SOLUONG: req.body.SOLUONG,
                    NAMXB: req.body.NAMXB,
                    isHide: isHide,
                    isHighlight: isHighlight,
                    NGUOINHAP: result.NGUOINHAP == null ? '' : result.NGUOINHAP,
                    NGAYCAPNHAT: now,
                    SUMMARY: req.body.summary,
                    CONTENT: req.body.content,
                }
                let flag = 0;
                if (typeof req.file == 'undefined') {
                    book.picture = result.picture;
                    flag = 1;
                }
                else
                    book.picture = req.file.filename;

                Book.updateSACH(book)
                    .then(result => {
                        req.flash('BookMessage', 'Sửa thành công thành công!');
                        res.redirect('/admin/book/list');
                    })
                    .catch(err => {
                        console.log(err);
                        req.flash('BookMessage', 'Sửa không thành công');
                        res.redirect('/admin/book/list');
                    })

            })


    })
})

module.exports = router;