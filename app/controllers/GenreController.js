var express = require('express');
var router = express.Router();
var THELOAI = require('../models/THELOAI')

router.get('/list', (req, res) => {
    THELOAI.getAll()
    .then(result => {
        res.render('admin/genre/list', {
            layout: 'main-admin',
            title: 'Quản lý thể loại',
            heading: 'Danh sách thể loại',
            genres: result,
            successMessage: req.flash('successMessage')[0],
            errorMessage: req.flash('errorMessage')[0]
        })
    })
})

router.get('/add', (req, res) => {
    res.render('admin/genre/add', {
        layout: 'main-admin',
        title: 'Quản lý thể loại',
        heading: 'Danh sách thể loại'
    })
})

router.post('/add', (req, res) => {
    var genre = {
        TEN: req.body.TEN,
        isHide: req.body.isHide
    }

    THELOAI.addTHELOAI(genre)
    .then(result => {
        req.flash('successMessage', 'Thêm thành công!!!');
        res.redirect('/admin/genre/list');
    })
    .catch(err => {
        req.flash('errorMessage', 'Thêm  không thành công!!!');
        res.redirect('/admin/genre/list');
    })
})


router.get('/edit/:id', (req, res) => {
    THELOAI.getById(req.params.id)
    .then(result => {
        res.render('admin/genre/edit', {
            layout: 'main-admin',
            title: 'Quản lý thể loại',
            heading: 'Chỉnh sửa thể loại',
            genre: result
        })
    })
})

router.post('/edit/:id', (req, res) => {
    var genre = {
        MA_THELOAI: req.params.id,
        TEN: req.body.TEN,
        isHide: req.body.isHide ? 1 : 0
    }
    THELOAI.updateTHELOAI(genre)
    .then(result => {
        req.flash('successMessage', 'Cập nhật thành công!!!');
        res.redirect('/admin/genre/list');
    })
    .catch(err => {
        console.log(err);
        req.flash('errorMessage', 'Cập nhật không thành công!!!');
        res.redirect('/admin/genre/list');
    })
})

router.post('/delete', (req, res) => {
    THELOAI.deleteById(req.body.id)
    .then(result => {
        res.send('Xoá thành công!!!');
    })
    .catch(err => {
        res.send();
    })
})

router.post('/update-visible', (req,res) =>{
    var info = {
        MA_THELOAI: req.body.id,
        isHide: req.body.hide
    }
    THELOAI.hide(info)
    .then(result => {
        res.send('Thanh cong!!!');
    })
    .catch(err => {
        res.send();
    })
})

module.exports = router;