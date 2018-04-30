var mysql = require('../../config/mysql');

var THELOAI = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from DOCGIA';
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
            var query = `select * from THELOAI where id = '${id}'`;
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
            var query = `insert into THELOAI (MA_THELOAI, TEN) values ('${THELOAI.MA_THELOAI}','${THELOAI.TEN}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        });
    },
    updateTHELOAI: (THELOAI) => {
        return new Promise((resolve, reject) => {
            var query = `update THELOAI set TEN = '${THELOAI.TEN} where MA_THELOAI = '${THELOAI.MA_THELOAI}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        })    
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from THELOAI where MA_DOCGIA = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
            });
        });  
    }

}