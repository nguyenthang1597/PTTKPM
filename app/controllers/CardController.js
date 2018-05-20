var express = require('express')
var router = express.Router();
var Card = require('../models/CARD');
var Reader = require('../models/DOCGIA');
var moment = require('moment');


router.get('/list', (req, res) => {
    Card.getAll()
    .then(results => {
        res.render('admin/card/list', {
            layout: 'main-admin',
            title: 'Quản lý thẻ thư viện',
            heading: 'Danh sách thẻ',
            cards: results,
            successMessage: req.flash('successMessage')[0],
            errorMessage: req.flash('errorMessage')[0]
        })
    })
})

router.get('/add', (req, res) => {
    Reader.getAll()
    .then(results => {
        res.render('admin/card/add', {
            layout: 'main-admin',
            title: 'Quản lý thẻ thư viện',
            heading: 'Thêm thẻ mới',
            readers: results
        })
    })
})

router.post('/add',(req, res) => {
    var NGAYLAP = moment().format('YYYY/MM/DD')
    var HSD = moment(req.body.HSD).format('YYYY/MM/DD');
    var card = {
        HSD: HSD,
        NGAYLAP: NGAYLAP,
        DOCGIA: req.body.DOCGIA
    }
    console.log(card);
    Card.addNew(card)
    .then(results => {
        req.flash('successMessage', 'Thêm thành công!');
        res.redirect('/admin/card/list');
    })
    .catch(err => {
        req.flash('errorMessage', 'Thêm không thành công!');
        res.redirect('/admin/card/list');
    })
})

router.get('/edit/:id', (req, res) => {
    Card.getById(req.params.id)
    .then(result =>{
        res.render('admin/card/edit', {
            card: result,
            layout: 'main-admin',
            title: 'Quản lý thẻ thư viện',
            heading: 'Chỉnh sửa thông tin'
        })
    })
})

router.post('/edit/:id', (req, res) => {
    var info = {
        MA_THE: req.params.id,
        HSD: moment(req.body.HSD).format('YYYY/MM/DD')
    }
    Card.update(info)
    .then(result => {
        req.flash('successMessage', 'Sửa thành công!!!')
        res.redirect('/admin/card/list');
    })
})


router.post('/delete', (req, res) => {
    Card.deleteById(req.body.id)
    .then(result => {
        res.send('Xoá thàh công!');
    })
    .catch(err => {
        console.log(err);
        res.send();
    })
})

module.exports = router;