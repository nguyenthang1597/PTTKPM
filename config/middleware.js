var middleware = {

    isLoggedInAdmin: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/admin');
    },
    LoggedAdmin: (req, res, next) => {
        if (!req.isAuthenticated())
            return next();
        res.redirect('/admin/dashboard');
    },
    LoggedUser: (req, res, next) => {
        if (!req.isAuthenticated())
            return next();
        res.redirect('/');
    },
    isThuThuAccess: (req, res, next) => {
        if (req.isAuthenticated()) {
            if (req.user.ROLE != 1)
                return res.render('admin/warning', {
                    layout: 'main-admin'
                })
        }
        next();
    },
    isSysAdminAccess: (req, res, next) => {
        if (req.isAuthenticated())
            if (req.user.ROLE != 3)
                return res.redirect('/admin/dashboard');

        next();
    },
    isSysAndAdminAccess: (req, res, next) => {
        if (req.isAuthenticated()) {
            if (req.user.ROLE == 1) {
                return res.render('admin/warning', {
                    layout: 'main-admin'
                })
            }
        }
        next();
    },
    checkThongTinThuThu : (req, res, next) => {
        if(req.isAuthenticated()) {
            if(req.user.ROLE == 1 && !req.user.ID){
                return res.redirect('/admin/profile-edit');
            }
        }
        next();
    }

}


module.exports = middleware;