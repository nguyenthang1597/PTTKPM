var express = require('express');
var router = express.Router();
var mw = require('../../config/middleware');
var LoginController = require('../controllers/LoginController');

router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', {
        layout: 'main-admin',
        title: 'Admin Dashboard'
    });
});

router.get('/', mw.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', mw.LoggedAdmin, LoginController.adminLogin);


module.exports = router;