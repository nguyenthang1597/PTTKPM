var express = require('express');
var router = express.Router();

var Author = require('../models/TACGIA')

router.get('/list', (req, res) => {
    Author.getAll()
        .then(result => {
            res.render('admin/author/list', {
                layout: 'main-admin',
                authors: result,
                title: 'Quản lý tác giả',
                heading: 'Danh sách tác giả',
                message: req.flash('AuthorMessage')[0]
            })
        })
})

router.get('/edit/:id', (req, res) => {
    Author.getById(req.params.id)
        .then(result => {
            res.render('admin/author/edit', {
                layout: 'main-admin',
                author: result,
                title: 'Quản lý tác giả',
                heading: 'Chỉnh sửa thông tin tác giả',

            })
        })
})

router.post('/edit/:id', (req, res) => {
    var TACGIA = {
        'MA_TACGIA': req.body.MA_TACGIA,
        'TEN': req.body.TEN,
        'TUOI': req.body.TUOI,
        'THONGTIN': req.body.THONGTIN
    }
    console.log(req.body);

    Author.updateTACGIA(TACGIA)
        .then(result => {
            console.log(result);
            req.flash('AuthorMessage', 'Chỉnh sửa thành công');
            res.redirect('/admin/author/list');
        })
        .catch(err => {
            req.flash('AuthorMessage', 'Chỉnh sửa khong thành công');
            res.redirect('/admin/author/list');
        })
})

router.post('/delete', (req, res) => {
    if (req.xhr || req.header.accept.indexOf('json') > -1) {
        console.log('ok');
        Author.deleteById(req.body.id)
            .then(result => {
                res.send('Xoá tác giả thành công');
            })
            .catch(err => {
                console.log(err);
                res.end();
            })
    }

})


router.get('/add', (req, res) => {
    res.render('admin/author/add', {
        layout: 'main-admin',
        title: 'Quản lý tác giả',
        heading: 'Thêm tác giả mới'
    })
})

router.post('/add', (req, res) => {
    var author = {
        'MA_TACGIA' : req.body.MA_TACGIA,
        'TEN' : req.body.TEN,
        'TUOI' : req.body.TUOI,
        'THONGTIN' : req.body.THONGTIN
    }

    Author.addTACGIA(author)
    .then(result=> {
        req.flash('AuthorMessage', 'Thêm Tác giả thành công');
        res.redirect('/admin/author/list');
    })
    .catch(err => {
        req.flash('AuthorMessage', 'Thêm Tác giả không thành công');
        res.redirect('/admin/author/list');
    })
})


module.exports = router;