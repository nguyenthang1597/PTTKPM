var express = require('express');
var router = express.Router();
var mw = require('../../config/middleware');
var LoginController = require('../controllers/LoginController');

router.get('/',  mw.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', mw.LoggedAdmin, LoginController.adminLogin);

router.get('/dashboard', (req, res) => {
    if(req.session.user)
        res.render('admin/dashboard', {
            layout: 'main-admin',
            title: 'Admin Dashboard',
            user: req.user,
            message: req.flash('message')[0]
        });
    else
        res.redirect('/admin');
});

router.get('/logout', LoginController.adminLogout);





module.exports = router;