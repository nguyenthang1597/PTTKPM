var passport = require('passport');

var LoginController = {
    formAdminLogin: (req, res) => {
        res.render('admin/login', {
            layout: false,
            message: req.flash('loginMessage')
        })
    },
    adminLogin: (req, res, next) => {
        passport.authenticate('local-admin-login', (err, user, info) => {
            if (err) return next(err);
            if (!user) return res.redirect('/admin');
            req.logIn(user, (err) => {
                if (err) return done(err);
                return res.redirect('/admin/dashboard');
            })
        })(req, res, next), (req, res) => {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;

            }
            else
                req.session.cookie.maxAge = false;
        }
    }
}


module.exports = LoginController;