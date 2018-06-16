var express = require('express');
var router = express.Router();
var Account = require('../model/Account');
var Info = require('../model/Info');
var moment = require('moment');
router.get('/list', (req, res) => {
    Account.find({role: {$lt: req.user.role}})
    .populate('info')
    .exec((err, result) => {
        var infos = [];
        result.forEach(element => {
            if(element.info){
                var {_id, TEN, GIOITINH, DIACHI, EMAIL, NGAYSINH, SDT} = element.info;
            NGAYSINH = moment(NGAYSINH).format('DD/MM/YYYY');
            var role = element.role;
            infos.push({_id, TEN, GIOITINH, DIACHI, EMAIL, NGAYSINH, SDT, role});
            }
            
        });
        res.render('admin/info/list', {
            infos: infos,
            layout: 'main-admin',
            title: req.user.role == 1 ? 'Quản lý thông tin đọc giả' : 'Quản lý thông tin',
            heading: req.user.role == 1 ? 'Danh sách thông tin đọc giả' : 'Danh sách thông tin'
        })
    })
    
})


module.exports = router;