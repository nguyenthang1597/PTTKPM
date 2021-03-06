var mysql = require('../../config/mysql')

var NXB = {
    getAll: () => {
        return new Promise ( (resolve, reject) => {
            var query = 'select * from NHAXUATBAN'
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select * from NHAXUATBAN where MA_NXB = '${id}'`
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(result[0]);
            });
        });
    },
    addNXB: (NXB) => {
        return new Promise((resolve, reject) => {
            var query = `insert into NHAXUATBAN(TEN, THONGTIN, isHide) values ('${NXB.TEN}', '${NXB.THONGTIN}', '0')`
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);    
                else
                    resolve(result);                
            });
        });
    },
    updateNXB: (NXB) => {
        return new Promise((resolve, reject) => {
            var query = `update NHAXUATBAN set MA_NXB = '${NXB.MA_NXB}', TEN = '${NXB.TEN}', THONGTIN = '${NXB.THONGTIN}', isHide = '${NXB.isHide}' where MA_NXB = '${NXB.MA_NXB}'`
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    deleteByID: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from NHAXUATBAN where MA_NXB = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    hide: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update NHAXUATBAN set isHide = '${info.isHide}' where MA_NXB = '${info.MA_NXB}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
}


module.exports = NXB;