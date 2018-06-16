const express = require('express');
var router = express.Router();
var Borrow = require('../model/Borrow')
var Book = require('../model/Book');
var Card = require('../model/Card');
var Account = require('../model/Account');
var Info = require('../model/Info');
var Rule = require('../model/Rule');
var async = require('async');
const mongoose = require('mongoose');
router.get('/list', (req, res) => {
    Borrow.find()
    .populate('SACH', 'TEN')
    .populate({path: 'THE', populate: {path: 'DOCGIA'}})
        .exec((err, result) => {
            res.render('admin/borrow/list', {
                layout: 'main-admin',
                title: 'Quản lý mượn sách',
                heading: 'Danh sách mượn sách',
                borrows: result,
                successMessage: req.flash('successMessage')[0],
                errorMessage: req.flash('errorMessage')[0]
            })
        })
})

router.get('/add', (req, res) => {
    Book.find({}, '_id TEN')
        .exec((err, books) => {
            res.render('admin/borrow/add', {
                layout: 'main-admin',
                title: 'Quản lý mượn sách',
                heading: 'Cho mượn sách',
                books: books
            })
        })
})

router.post('/add', (req, res) => {
    let THUTHU;
    let count = 0;
    let limit;
    var borrow = {
        THE: req.body.THE,
        SACH: req.body.SACH,
        SOLUONG: req.body.SOLUONG
    }
    async.parallel({
        THUTHU: (callback) => {
            Account.findOne({_id: req.user._id}, callback);
        },
        COUNT: (callback) => {
            Borrow.find({
                THE: req.body.THE,
                TINHTRANG: false
            }, callback);
        },
        limit: (callback) => {
            Rule.findOne({}, callback);
        }
    }, (err, result) => {
        THUTHU = result.THUTHU.TEN;
        (result.COUNT).forEach(element => {
            count += element.SOLUONG;
        });
        limit = result.limit.SOSACHTOIDA;
        if (count < limit) {
            borrow.THUTHU = THUTHU;
            Borrow.create(borrow)
                .then(result => {
                    console.log(borrow.SACH);
                    Book.findOneAndUpdate({
                        _id: req.body.SACH
                    }, {
                        $inc: {SOLUONGCONLAI: -borrow.SOLUONG}
                    }, (err, result) => {
                        if (err)
                            console.log(err);
                        else {
                            req.flash('successMessage', 'Mượn thành công')
                            res.redirect('/admin/borrow/list');
                        }
                    })

                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            req.flash('errorMessage', 'Quá số lượng sách có thể mượn!');
            res.redirect('/admin/borrow/list');
        }
    })
})

router.post('/delete', (req, res) => {
    console.log(req.body.id);
    Borrow.findById(req.body.id, (err, result) => {
        if(result.TINHTRANG == false){
            return res.send(false);
        }else
        Borrow.deleteOne({_id: req.body.id}, (err) => {
            if(err)
                res.send(false);
            else
                res.send(true);
        })
    })
})


module.exports = router;