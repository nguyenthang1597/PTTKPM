const express = require('express');
const router = express.Router();
const Rule = require('../model/Rule');


router.get('/', (req, res) => {
    Rule.findOne({}, (err, result) => {
        res.render('admin/rules/rule', {
            layout: 'main-admin',
            title: 'Qui định thư viện',
            heading: 'Qui định',
            rules: result,
            errorMessage: req.flash('errorMessage')[0],
            successMessage: req.flash('successMessage')[0]
        })
    })
})

router.post('/', (req, res) => {
    Rule.findOneAndUpdate({}, {
        SONGAYMUON: req.body.SONGAYMUON,
        SOSACHTOIDA: req.body.SOSACHTOIDA
    }, (err, result) => {
        if(err){
            req.flash('errorMessage', 'Không thành công!');
            res.redirect('/admin/rules');
        }
        else{
            req.flash('successMessage', 'Thành công!');
            res.redirect('/admin/rules');
        }
    })
})


module.exports = router;