
var middleware = {

    isLoggedInAdmin: (req, res, next) => {  
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/admin');
    },
    LoggedAdmin: (req, res, next) => {
        if (!req.isAuthenticated())
            return next();
        res.redirect('/admin/dashboard');
    },
    isThuThuAccess: (req, res, next)=>{
        if(req.isAuthenticated()){
            if(req.user.role == 1)
                return res.redirect('/admin/dashboard');
        }
        next();
    },
    isSysAdminAccess: (req, res, next) => {
        if(req.isAuthenticated())
            if(req.user.role != 3)
                return res.redirect('/admin/dashboard');

        next();
    },
    isSysAndAdminAccess: (req, res, next) => {
        if(req.isAuthenticated())
            (req.user.role == 1)
                res.redirect('/admin/dashboard');
        next();
    },

}


module.exports = middleware;