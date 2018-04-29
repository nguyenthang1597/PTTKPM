var AdminController = require('../app/controllers/AdminController');
var LoginController = require('../app/controllers/LoginController');

var mw = require('../config/middleware');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Express'})
    })

    app.use('/admin', AdminController);


}         