
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
            if(req.user.role != 1)
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
        if(req.isAuthenticated()){
            if(req.user.ROLE == 1){
                return res.render('admin/warning', {
                    layout: 'main-admin'
                })
            }  
        }
        next();
    },

}


module.exports = middleware;