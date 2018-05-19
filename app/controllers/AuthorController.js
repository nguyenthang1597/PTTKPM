var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs')
var Author = require('../models/TACGIA')

var storage = multer.diskStorage({
    destination: 'public/upload/author',
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname.replace(' ', ''));
    }
})

var upload = multer({
    storage: storage
}).single('picture');

var errorHandler = (req, res, message) => {
    if (req.file !== undefined) {
        let url_del = 'public/upload/author/' + req.file.filename;
        if (fs.existsSync(url_del))
            fs.unlinkSync(url_del);
    }

    req.flash('errorMessage', message);
    res.redirect('/admin/author/list');
}


router.get('/list', (req, res) => {
    Author.getAll()
        .then(result => {
            res.render('admin/author/list', {
                layout: 'main-admin',
                authors: result,
                title: 'Quản lý tác giả',
                heading: 'Danh sách tác giả',
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0]
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
                author: result
            })
        })
})

router.post('/edit/:id', (req, res) => {
    let TACGIA;
    upload(req, res, (err) => {
        if (err) {
            console.log("abcd");
            return console.log(err);
        }
        Author.getById(req.params.id)
            .then(result => {
                TACGIA = {
                    MA_TACGIA: req.params.id,
                    TEN: req.body.TEN,
                    TUOI: req.body.TUOI,
                    THONGTIN: req.body.THONGTIN,
                    isHide: req.body.isHide ? 1 : 0
                };

                if (typeof req.file == 'undefined') {
                    TACGIA.picture = result.picture;
                } else
                    TACGIA.picture = req.file.filename;

                console.log(TACGIA);
                return Author.updateTACGIA(TACGIA)
            })
            .then(resultl => {
                req.flash('successMessage', 'Cập nhật thành công');
                res.redirect('/admin/author/list');
            })
            .catch(err => {
                console.log(err);
                errorHandler(req, res, 'Cập nhật không thành công!');
            })
    })

})

router.post('/delete', (req, res) => {
    if (req.xhr || req.header.accept.indexOf('json') > -1) {
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
        'TEN': req.body.TEN,
        'TUOI': req.body.TUOI,
        'THONGTIN': req.body.THONGTIN,
    }

    Author.addTACGIA(author)
        .then(result => {
            req.flash('successMessage', 'Thêm Tác giả thành công');
            res.redirect('/admin/author/list');
        })
        .catch(err => {
            console.log(err);
            req.flash('errorMessage', 'Thêm Tác giả không thành công');
            res.redirect('/admin/author/list');
        })
})

router.post('/update-visible', (req, res) => {
    var info = {
        MA_TACGIA: req.body.id,
        isHide: req.body.hide
    }
    console.log(info);
    Author.hide(info)
        .then(result => {
            res.send("Thanh cong");
        })
        .catch(err => {
            res.send();
        })
})


module.exports = router;