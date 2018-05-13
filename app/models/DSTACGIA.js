var mysql = require('../../config/mysql');

var DSTACGIA = {
    addNew: (info) => {
        return new Promise((resolve, reject) => {
            var query = `insert into DSTACGIA (MA_SACH, MA_TACGIA) values ('${info.MA_SACH}','${info.MA_TACGIA}')`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        })
    },
    update: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update DSTACGIA set MA_TACGIA = '${info.MA_TACGIA}' where MA_SACH = '${info.MA_SACH}'`
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
            var query = `delete from DSTACGIA where MA_SACH = '${id}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    delete: (info) => {
        return new Promise((resolve, reject) => {
            var query = `delete from DSTACGIA where MA_SACH = '${info.MA_SACH}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    }
}


module.exports = DSTACGIA;