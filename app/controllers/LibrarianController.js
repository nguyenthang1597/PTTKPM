var express = require('express');
var router = express.Router();

var moment = require('moment');

var Librarian = require('../models/THUTHU');
var Account = require('../models/ACCAD');

router.get('/list', (req, res) => {
    Librarian.getAll()
        .then(results => {
            res.render('admin/librarian/list', {
                layout: 'main-admin',
                librarians: results,
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0],
                title: 'Quản lý thủ thư',
                heading: 'Danh sách thủ thư'
            })
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


router.post('/delete', (req, res) => {
    var MA_THUTHU = req.body.MA_THUTHU;
    console.log(MA_THUTHU);
    Librarian.deleteById(MA_THUTHU)
        .then(result => {
            res.send('Xoá thành công!!!');
        })
        .catch(err => {
            res.send();
            console.log(err);
        })
})

module.exports = router;