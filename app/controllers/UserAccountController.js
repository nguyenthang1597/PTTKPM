var express = require('express');
var router = express.Router();
var UserAccount = require('../models/ACCUSER');

router.get('/list', (req, res) => {
    UserAccount.getAll()
    .then(results => {
        res.render('admin/user-account/list', {
            layout: 'main-admin',
            title: 'Quản lý tài khoản người dùng',
            heading: 'Danh sách tài khoản',
            accounts: results,
            successMessage: req.flash('successMessage')[0],
            errorMessage: req.flash('errorMessage')[0]
        })
    })
})

router.get('/edit/:username', (req, res) => {
    UserAccount.getByUsername(req.params.username)
    .then(result => {
        console.log(result);
        res.render('admin/user-account/edit', {
            layout: 'main-admin',
            title: 'Quản lý tài khoản người dùng',
            heading: 'Chỉnh sửa tài khoản người dùng',
            account: result
        })
    })
})


router.post('/edit/:username', (req, res) => {
    var account = {
        USERNAME: req.body.USERNAME,
        active: req.body.active ? 0 : 1
    }
    console.log(account);
    UserAccount.update(account)
    .then(results => {
        req.flash('successMessage', 'Sửa thành công!!!');
        res.redirect('/admin/user-account/list');
    })
    .catch(err => {
        console.log(err);
        req.flash('errorMessage', 'Sửa không thành công!!!');
        res.redirect('/admin/user-account/list');
    })
})

module.exports = router;