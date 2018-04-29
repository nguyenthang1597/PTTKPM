var LocalStratgy = require('passport-local').Strategy;

var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');




module.exports = (passport, mysql) => {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(
        'local-admin-login',
        new LocalStratgy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        }, 
        (req, username, password, done) => {
            var query = `select * from ADMINACC where USERNAME = '${username}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    return done(err);                
                if(result.length == 0)
                    return done(null, false, req.flash('loginMessage', 'Tài khoản không tồn tại!!!'));
                if(result.length > 0 && result[0].active == 0)
                    return done(null, false, req.flash('loginMessage', 'Tài khoản đã bị khoá!!!'));
                if(!bcrypt.compareSync(password, result[0].PASSWORD))
                    return done(null, false, req.flash('loginMessage', 'Mật khẩu không đúng!!!'));
                return done(null, result[0], req.flash('successMessage', 'ok'));
            })
        }
    )
    )
}