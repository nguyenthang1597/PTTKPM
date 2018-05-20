var mysql = require('../../config/mysql');


var TACGIA = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from TACGIA';
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else {
                    resolve(result);
                }
            });
        });
    },
    getAllIndex: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from TACGIA where isHide = 0';
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else {
                    resolve(result);
                }
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select * from TACGIA where MA_TACGIA = '${id}'`;
            console.log(query);
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            });
        });
    },
    addTACGIA: (TACGIA) => {
        return new Promise((resolve, reject) => {
            var query = '';
            if (TACGIA.TUOI)
                query = `insert into TACGIA (TEN, TUOI, THONGTIN, isHide, picture) values ('${TACGIA.TEN}', '${TACGIA.TUOI}' ,'${TACGIA.THONGTIN}', '0', '${TACGIA.picture}')`;
            else
                query = `insert into TACGIA (TEN, TUOI, THONGTIN, isHide, picture) values ('${TACGIA.TEN}', null ,'${TACGIA.THONGTIN}', '0', '${TACGIA.picture}')`;
            console.log(query);
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    updateTACGIA: (TACGIA) => {
        return new Promise((resolve, reject) => {
            var query = '';
            if (TACGIA.TUOI)
                query = `update TACGIA set TEN = '${TACGIA.TEN}', TUOI = ${TACGIA.TUOI}, THONGTIN = '${TACGIA.THONGTIN}', isHide = '${TACGIA.isHide}', picture = '${TACGIA.picture}' where MA_TACGIA = '${TACGIA.MA_TACGIA}'`;
            else
                query = `update TACGIA set TEN = '${TACGIA.TEN}', THONGTIN = '${TACGIA.THONGTIN}', isHide = '${TACGIA.isHide}',picture = '${TACGIA.picture}'  where MA_TACGIA = '${TACGIA.MA_TACGIA}'`;
            console.log(query);
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from TACGIA where MA_TACGIA = '${id}'`;
            console.log(query);
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        })
    },
    hide: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update TACGIA set isHide = '${info.isHide}' where MA_TACGIA = '${info.MA_TACGIA}'`
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
}


module.exports = TACGIA;