
var middleware = {

    isLoggedInAdmin: (req, res, next) => {
        if(req.isAuthenticated())
            return next();
        res.redirect('/admin');
    },
    LoggedAdmin: (req, res, next) => {
        if (!req.isAuthenticated())
            return next();
        res.redirect('/admin/dashboard');
    },
}


module.exports = middleware;