var mysql = require('../../config/mysql');

var THELOAI = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from THELOAI';
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
            var query = `select * from THELOAI where MA_THELOAI = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            });
        });
    },
    addTHELOAI: (THELOAI) => {
        return new Promise((resolve, reject) => {
            var query = `insert into THELOAI (TEN) values ('${THELOAI.TEN}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    updateTHELOAI: (THELOAI) => {
        return new Promise((resolve, reject) => {
            var query = `update THELOAI set TEN = '${THELOAI.TEN}' where MA_THELOAI = '${THELOAI.MA_THELOAI}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        })
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from THELOAI where MA_THELOAI = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

}

module.exports = THELOAI;