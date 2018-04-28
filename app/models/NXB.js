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
            var query = `insert into NHAXUATBAN(MA_NXB, TEN, THONGTIN) values ('${NXB.MA_NXB}', '${NXB.TEN}', '${NXB.THONGTIN}')`
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);                    
            });
        });
    },
    updateNXB: (NXB) => {
        return new Promise((resolve, reject) => {
            var query = `update NHAXUATBAN set MA_NXB = '${NXB.MA_NXB}', TEN = '${NXB.TEN}', THONGTIN = '${NXB.THONGTIN}' where MA_NXB = '${NXB.MA_NXB}'`
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
            });
        });
    },
    deleteByID: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from NHAXUATBAN where MA_NXB = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
            });
        });
    }
}


module.exports = NXB;