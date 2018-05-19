var express = require('express');
var router = express.Router();
var UserAccount = require('../models/ACCUSER');
var Reader = require('../models/DOCGIA');

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

router.get('/add', (req, res) => {
    res.render('admin/user-account/add', {
        layout: 'main-admin',
        title: 'Quản lý tài khoản đọc giả',
        heading: 'Thêm tài khoản mới'
    })
})

router.post('/add', (req, res) => {
    let readerID;
    var account = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD
    }
    Reader.addDefault()
    .then(result => {
        console.log(result);
        readerID = result.insertID;
        return UserAccount.addNew(account);
    })
    .then(result => {
        var info = {
            USERNAME: account.USERNAME,
            ID: readerID
        }
        return UserAccount.setID(info);
    })
    .then(result => {
        req.flash('successMessage', 'Thêm tài khoản thành công!!!');
        res.redirect('/admin/user-account/list');
    })
    .catch(err => {
        req.flash('successMessage', 'Thêm tài khoản không thành công!!!');
        res.redirect('/admin/user-account/list');
    })
    

})
module.exports = router;