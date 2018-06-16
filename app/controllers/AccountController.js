var express = require('express');
var router = express.Router();
var Account = require('../model/Account')


router.get('/list', (req, res) => {
    Account.find({role: {$lt: req.user.role}}, 'username role active', (err, result) => {
        res.render('admin/account/list', {
            layout: 'main-admin',
            title: req.user.role == 1 ? 'Quản lý tài khoản đọc gỉa' : 'Quản lý tài khoản người dùng',
            heading: req.user.role == 1 ? 'Danh sách tài khoản đọc giả' : 'Danh sách tài khoản người dùng',
            accounts: result,
            successMessage: req.flash('successMessage')[0],
            errorMessage: req.flash('errorMessage')[0]
        })
    })
})

router.get('/add', (req, res) => {
    res.render('admin/account/add', {
        layout: 'main-admin'
    })
})

router.post('/add', (req, res) => {
    Account.create({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    })
    .then(result => {
        req.flash('successMessage', req.body.role == 0 ? 'Thêm tài khoản đọc giả thành công' : req.body.role == 1 ? 'Thêm tài khoản thủ thư thành công' : 'Thêm tài khoản admin thành công');
        res.redirect('/admin/account/list');
    })
    .catch(err => {
        req.flash('errorMessage', req.body.role == 0 ? 'Thêm tài khoản đọc giả không thành công' : req.body.role == 1 ? 'Thêm tài khoản thủ thư không thành công' : 'Thêm tài khoản admin không thành công');
        res.redirect('/admin/account/list');
    })
})


module.exports = router;