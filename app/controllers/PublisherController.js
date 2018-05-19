var express = require('express')
var router = express.Router();

var Publisher = require('../models/NXB');

router.get('/list', (req, res) => {
    Publisher.getAll()
        .then(result => {
            res.render('admin/publisher/list', {
                layout: 'main-admin',
                title: 'Quản lý nhà xuất bản',
                heading: 'Danh sách nhà xuất bản',
                publishers: result,
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0]
            })
        })
})

router.get('/add', (req, res) => {
    res.render('admin/publisher/add', {
        layout: 'main-admin',
        title: 'Quản lý nhà xuất bản',
        heading: 'Thêm nhà xuất bản'
    })
})

router.post('/add', (req, res) => {
    var publisher = {
        TEN: req.body.TEN,
        THONGTIN: req.body.THONGTIN
    }
    console.log(publisher);
    Publisher.addNXB(publisher)
        .then(result => {
            req.flash('successMessage', 'Thêm Thành công!!!');
            res.redirect('/admin/publisher/list');
        })
        .catch(err => {
            req.flash('errorMessage', 'Thêm không Thành công!!!');
            res.redirect('/admin/publisher/list');
        })
})

router.get('/edit/:id', (req, res) => {
    Publisher.getById(req.params.id)
        .then(result => {
            res.render('admin/publisher/edit', {
                layout: 'main-admin',
                title: 'Quản lý nhà xuất bản',
                heading: 'Chỉnh sửa thông tin',
                publisher: result
            })
        })
})

router.post('/edit/:id', (req, res) => {
    var publisher = {
        MA_NXB: req.params.id,
        TEN: req.body.TEN,
        THONGTIN: req.body.THONGTIN,
        isHide: req.body.isHide ? 1 : 0
    }

    Publisher.updateNXB(publisher)
    .then(result => {
        req.flash('successMessage', 'Chỉnh sửa thành công!!!');
        res.redirect('/admin/publisher/list');
    })
    .catch(err => {
        req.flash('errorMessage', 'Chỉnh sửa không thành công!!!');
        res.redirect('/admin/publisher/list');
    })
})

router.post('/update-visible', (req, res) => {
    var info = {
        MA_NXB: req.body.id,
        isHide: req.body.hide
    }
    Publisher.hide(info)
    .then(result => {
        res.send('Thanh cong!!!');
    })
    .catch(err => {
        res.send();
    })
})
module.exports = router;