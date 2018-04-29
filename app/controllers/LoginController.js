var passport = require('passport');

var LoginController = {
    formAdminLogin: (req, res) => {
        res.render('admin/login', {
            layout: false,
            message: req.flash('loginMessage'),
            success_message: req.flash('susscesMesage')
        })
    },
    adminLogin: (req, res, next) => {
        passport.authenticate('local-admin-login', (err, user, info) => {
            if (err) return next(err);
            if (!user) return res.redirect('/admin');
            req.logIn(user, (err) => {
                if (err) return done(err);
                req.session.user = user;
                if (req.body.remember) {
                    req.session.cookie.originalMaxAge = 1000 * 60 * 3;
                }
                else
                    req.session.cookie.originalMaxAge = false;
                return res.redirect('/admin/dashboard');
            })
        })(req, res, next)
    },
    adminLogout: (req, res) => {
        req.logout();
        if(!req.session.cookie.expires)
            req.session.destroy();
        res.redirect('/admin');
    },
    logout: (req, res, next) => {
        req.logout();
        req.session = {};
        res.redirect('/');
    }
}


module.exports = LoginController;