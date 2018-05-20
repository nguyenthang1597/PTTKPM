var express = require('express')
var router = express.Router();
var Borrow = require('../models/MUONSACH');


router.get('/list', (req, res) => {
    Borrow.getAll()
    .then(results => {
        res.render('admin/borrow/list', {
            layout: 'main-admin',
            title: 'Mượn sách',
            heading: 'Danh sách mượn sách',
            borrows: results
        })
    })
})


module.exports = router;