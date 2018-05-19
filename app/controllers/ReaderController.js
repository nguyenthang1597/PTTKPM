var express = require('express');
var router = express.Router();

var Reader = require('../models/DOCGIA');


router.get('/list', (req, res) => {
    Reader.getAll()
    .then(results => {
        res.render('admin/reader/list', {
            layout: 'main-admin',
            title: 'Quản lý đọc giả',
            heading: 'Danh sách đọc giả',
            readers: results,
            successMessage: req.flash('successMessage')[0],
            errorMessage: req.flash('errorMessage')[0]
        })
    })
})

router.get('/add', (req, res) => {
    res.render('admin/reader/add', {
        layout: 'main-admin',
        title: 'Quản lý đọc giả',
        heading: 'Thêm đọc giả'
    })
})



module.exports = router;