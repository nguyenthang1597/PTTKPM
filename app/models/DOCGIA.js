var mysql = require('../../config/mysql');


var DOCGIA = {
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
            var query = `select * from DOCGIA where id = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            });
        });
    },
    addDOCGIA: (DOCGIA) => {
        return new Promise((resolve, reject) => {
            var query = `insert into DOCGIA (MA_DOCGIA, TEN, NGAYSINH, GIOITINH, EMAIL, DIACHI, CMND, NGUOIGIAMHO) values ('${DOCGIA.MA_DOCGIA}', '${DOCGIA.TEN}','${DOCGIA.NGAYSINH}', ${DOCGIA.GIOITINH}, '${DOCGIA.EMAIL}', '${DOCGIA.DIACHI}', '${DOCGIA.CMND}', '${DOCGIA.NGUOIGIAMHO}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        })
    },
    updateDOCGIA: (DOCGIA) => {
        return new Promise((resolve, reject) => {
            var query = `update DOCGIA set TEN = '${DOCGIA.TEN}', NGAYSINH = '${DOCGIA.NGAYSINH}', GIOITINH = ${DOCGIA.GIOITINH}, EMAIL = '${DOCGIA.EMAIL}', DIACHI = '${DOCGI.DIACHI}', CMND = '${DOCGIA.CMND}', NGUOIGIAMHO = '${DOCGIA.NGUOIGIAMHO}' where MA_DOCGIA = '${DOCGIA.MA_DOCGIA}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete DOCGIA where MA_DOCGIA = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if(err)
                    reject(err);
            });
        });
    }
}


module.exports = DOCGIA;