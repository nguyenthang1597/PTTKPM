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
    getAllIndex: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from THELOAI where isHide = 0';
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
            var query = `insert into THELOAI (TEN, isHide) values ('${THELOAI.TEN}', '0')`;
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
            var query = `update THELOAI set TEN = '${THELOAI.TEN}', isHide = '${THELOAI.isHide}' where MA_THELOAI = '${THELOAI.MA_THELOAI}'`;
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
    },
    hide: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update THELOAI set isHide = '${info.isHide}' where MA_THELOAI = '${info.MA_THELOAI}'`;
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