var mysql = require('../../config/mysql');


var TACGIA = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from TACGIA';
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else {
                    console.log(fields);
                    resolve(result);
                }
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select * from TACGIA where id = '${id}'`;
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
            var query = `insert into TACGIA (MA_TACGIA, TEN, TUOI, THONGTIN) values ('${TACGIA.MA_TACGIA}','${TACGIA.TEN}',${TACGIA.TUOI},'${TACGIA.THONGTIN}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        });
    },
    updateTACGIA: (TACGIA) => {
        return new Promise((resolve, reject) => {
            var query = `update TACGIA set TEN = '${TACGIA.TEN}, TUOI = ${TACGIA.TUOI}, THONGTIN = '${TACGIA.THONGTIN}' where MA_TACGIA = '${TACGIA.MA_TACGIA}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete TACGIA where MA_TACGIA = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            }); 
        })
    }
}


module.exports = TACGIA;