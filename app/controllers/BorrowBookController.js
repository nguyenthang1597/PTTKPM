var express = require('express')
var router = express.Router();
var Borrow = require('../models/MUONSACH');
var Book = require('../models/SACH');
var moment = require('moment');
router.get('/list', (req, res) => {
    Borrow.getAll()
    .then(results => {
        res.render('admin/borrow/list', {
            layout: 'main-admin',
            title: 'Mượn sách',
            heading: 'Danh sách mượn sách',
            borrows: results
        })
    })
})

router.get('/add', (req, res) => {
    Book.getAllIndex()
    .then(results => {
        res.render('admin/borrow/add', {
            layout: 'main-admin',
            title: 'Mượn sách',
            heading: 'Cho mượn sách',
            books: results
        })
    })
})

router.get('/trasach/:MA_THUTHU-:MA_SACH-:MA_THE-:NGAYMUON-:SOLUONG', (req, res) => {
    let SL;
    var info = {
        MA_THUTHU: req.params.MA_THUTHU,
        MA_THE: req.params.MA_THE,
        MA_SACH: req.params.MA_SACH,
        NGAYMUON: req.params.NGAYMUON
    }
    Borrow.trasach(info)
    .then(result => {
        return Book.updateSLCL({MA_SACH: info.MA_SACH, SOLUONG: -req.params.SOLUONG})
    })
    .then(result => {
        res.redirect('/admin/borrow/list');
    })

})

router.post('/add',(req, res) => {
    var NGAYMUON = moment().format('YYYY/MM/DD');
    var info = {
        MA_THE: req.body.MA_THE,
        MA_SACH: req.body.MA_SACH,
        SOLUONG: req.body.SOLUONG,
        NGAYMUON: NGAYMUON,
        MA_THUTHU: req.user.ID
    }
    Borrow.add(info)
    .then(results => {
        return Book.updateSLCL({MA_SACH: info.MA_SACH, SOLUONG: info.SOLUONG});
    })
    .then(result => {
        req.flash('successMessage', 'Thành công!');
        res.redirect('/admin/borrow/list');
    })
    .catch(err => {
        console.log(err);
        req.flash('errorMessage', 'Không thành công!');
        res.redirect('/admin/borrow/list');
    })
})
module.exports = router;