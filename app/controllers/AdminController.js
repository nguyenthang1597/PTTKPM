var express = require('express');
var router = express.Router();
var mw = require('../../config/middleware');
var LoginController = require('../controllers/LoginController');
var moment = require('moment')
var Librarian = require('../models/THUTHU');
var Account = require('../models/ACCAD');

router.get('/', mw.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', mw.LoggedAdmin, LoginController.adminLogin);

router.get('/dashboard', mw.checkThongTinThuThu, (req, res) => {
    if (req.session.user)
        res.render('admin/dashboard', {
            layout: 'main-admin',
            title: 'Admin Dashboard',
            user: req.user,
            message: req.flash('message')[0]
        });
    else
        res.redirect('/admin');
});
router.get('/profile-edit', (req, res) => {

    if (req.user.ID) {
        Librarian.getById(req.user.ID)
            .then(results => {
                console.log(results);
                res.render('admin/librarian/profile-edit', {
                    layout: 'main-admin',
                    librarian: results,
                    title: 'Quản lý tài khoản',
                    heading: 'Chỉnh sửa thông tin cá nhân'
                })
            })
    } else


        res.render('admin/librarian/profile-edit', {
            layout: 'main-admin',
            librarian: null,
            title: 'Quản lý tài khoản',
            heading: 'Chỉnh sửa thông tin cá nhân'
        })
})

router.post('/profile-edit', (req, res) => {
    console.log(req.body.NGAYSINH);
    var NGAYSINH = moment(req.body.NGAYSINH, 'YYYY-MM-DD').format('YYYY/MM/DD');
    var librarian = {
        TEN: req.body.TEN,
        NGAYSINH: NGAYSINH,
        GIOITINH: req.body.GIOITINH,
        DIACHI: req.body.DIACHI,
        EMAIL: req.body.EMAIL,
        SDT: req.body.SDT
    }
    if (req.user.ID) {

        librarian.MA_THUTHU = req.user.ID;
        Librarian.updateTHUTHU(librarian)
            .then(results => {
                req.flash('message', 'Chỉnh sửa thành công');
                res.redirect('/admin');
            })
            .catch(err => {
                req.flash('message', 'Chỉnh sửa không thành công');
                res.redirect('/admin');
            })
    } else {
        console.log("2");
        Librarian.addTHUTHU(librarian)
            .then(results => {
                console.log(req.user);
                Account.addID(req.user.USERNAME, results.insertId)
                    .then(result => {
                        req.flash('message', 'Chỉnh sửa thành công');
                        res.redirect('/admin/dashboard');
                    })
                    .catch(err => {
                        console.log(err);
                        Librarian.deleteById(results.insertId);
                        req.flash('message', 'Chỉnh sửa không thành công');
                        res.redirect('/admin/dashboard');
                    })

            })
            .catch(err => {
                console.log(err);
                req.flash('message', 'Chỉnh sửa không thành công');
                res.redirect('/admin');
            })
    }
})

router.get('/logout', LoginController.adminLogout);





module.exports = router;