var mysql = require('../../config/mysql');


var THUTHU = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = 'select * from THUTHU';
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
            var query = `select TEN, GIOITINH, DIACHI, EMAIL, SDT, DATE_FORMAT(NGAYSINH, '%Y-%m-%d') as NGAYSINH from THUTHU where MA_THUTHU = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            });
        });
    },
    addTHUTHU: (THUTHU) => {
        return new Promise((resolve, reject) => {
            var query = `insert into THUTHU (TEN, NGAYSINH, GIOITINH, DIACHI, EMAIL, SDT) values ('${THUTHU.TEN}','${THUTHU.NGAYSINH}',${THUTHU.GIOITINH},'${THUTHU.DIACHI}','${THUTHU.EMAIL}','${THUTHU.SDT}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        })
    },
    updateTHUTHU: (THUTHU) => {
        return new Promise((resolve, reject) => {
            var query = `update THUTHU set TEN = '${THUTHU.TEN}', NGAYSINH = '${THUTHU.NGAYSINH}', GIOITINH = ${THUTHU.GIOITINH}, DIACHI = '${THUTHU.DIACHI}', EMAIL = '${THUTHU.EMAIL}', SDT = '${THUTHU.SDT}' where MA_THUTHU = '${THUTHU.MA_THUTHU}'`;
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
            var query = `delete from THUTHU where MA_THUTHU = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
}

module.exports = THUTHU;