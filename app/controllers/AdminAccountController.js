var express = require('express');
var router = express.Router();
var Account = require('../models/ACCAD');
var Librarian = require('../models/THUTHU');
var bcrypt = require('bcrypt-nodejs');
router.get('/list', (req, res) => {
    var role = req.user.ROLE;

    Account.getAll(role)
        .then(results => {
            res.render('admin/account/list', {
                layout: 'main-admin',
                title: 'Quản lý tài khoản',
                heading: 'Danh sách tài khoản',
                accounts: results,
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0]
            })
        })
})

router.get('/edit/:username', (req, res) => {
    Account.getByUsername(req.params.username)
        .then(account => {
            res.render('admin/account/edit', {
                layout: 'main-admin',
                title: 'Quản lý tài khoản',
                heading: 'Chỉnh sửa tài khoản',
                account: account,
                user: req.user,
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0]
            })
        })
})

router.post('/edit/:username', (req, res) => {
    var active = req.body.active == 'true' ? 0 : 1
    var account = {
        USERNAME: req.params.username,
        ROLE: req.body.ROLE,
        active: active
    }
    Account.update(account)
        .then(results => {
            req.flash('successMessage', 'Chỉnh sửa thành công!!');
            res.redirect('/admin/account/list');
        })
        .catch(err => {
            req.flash('errorMessage', 'Chỉnh sửa không thành công!!');
            res.redirect('/admin/account/list');
        })
})

router.post('/delete', (req, res) => {
    Account.deleteByUsername(req.body.USERNAME)
        .then(result => {
            res.send('Xoá thành công!');
        })
        .catch(err => {
            res.send();
        })
})


router.get('/add', (req, res) => {
    res.render('admin/account/add', {
        layout: 'main-admin',
        title: 'Quản lý tài khoản',
        heading: 'Thêm tài khoản mới',
        user: req.user
    })
})


router.post('/add', (req, res) => {
    var password = bcrypt.hashSync(req.body.PASSWORD, null, null);
    var account = {
        USERNAME: req.body.USERNAME,
        PASSWORD: password,
        ROLE: req.body.ROLE
    }
    Account.addAccount(account)
    .then(result => {
        req.flash('successMessage', 'Thêm tài khoản thành công!!!');
        res.redirect('/admin/account/list');
    })
    .catch(err => {
        req.flash('errorMessage', 'Thêm tài khoản thất bại!!!');
        res.redirect('/admin/account/list');
    })
})

module.exports = router;
