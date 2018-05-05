var mysql = require('../../config/mysql');


var DSTHELOAI = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select * from DSTHELOAI`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    addNew: (info) => {
        return new Promise((resolve, reject) => {
            var query = `insert into DSTHELOAI (MA_SACH, MA_THELOAI) values ('${info.MA_SACH}','${info.MA_THELOAI}')`;
            mysql.query(query, (err, results, reject) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    update: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update DSTHELOAI set MA_THELOAI = '${info.MA_THELOAI}' where MA_SACH = '${info.MA_SACH}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from DSTHELOAI where MA_SACH = '${id}'`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    }

}

module.exports = DSTHELOAI;