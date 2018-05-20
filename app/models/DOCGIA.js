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
            var query = `select *, DATE_FORMAT(DOCGIA.NGAYSINH, "%Y-%m-%d") as NGAYSINH from DOCGIA where MA_DOCGIA = '${id}'`;
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
            var query = `insert into DOCGIA (TEN, NGAYSINH, GIOITINH, EMAIL, DIACHI, CMND, NGUOIGIAMHO) values ('${DOCGIA.TEN}','${DOCGIA.NGAYSINH}', ${DOCGIA.GIOITINH}, '${DOCGIA.EMAIL}', '${DOCGIA.DIACHI}', '${DOCGIA.CMND}', '${DOCGIA.NGUOIGIAMHO}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        })
    },
    updateDOCGIA: (DOCGIA) => {
        return new Promise((resolve, reject) => {
            var query = `update DOCGIA set TEN = '${DOCGIA.TEN}', NGAYSINH = '${DOCGIA.NGAYSINH}', GIOITINH = ${DOCGIA.GIOITINH}, EMAIL = '${DOCGIA.EMAIL}', DIACHI = '${DOCGIA.DIACHI}', CMND = '${DOCGIA.CMND}' where MA_DOCGIA = '${DOCGIA.MA_DOCGIA}'`;
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
            var query = `delete from DOCGIA where MA_DOCGIA = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
    addDefault: () => {
        return new Promise((resolve, reject) => {
            var query = `insert into DOCGIA () values ()`
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    },
}


module.exports = DOCGIA;