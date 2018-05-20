var mysql = require('../../config/mysql')

var MUONSACH = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select MUONSACH.*, THUTHU.TEN as TENTHUTHU, DOCGIA.TEN as TEN, DOCGIA.MA_DOCGIA as MA_DOCGIA, SACH.TEN as TENSACH from MUONSACH, THUTHU, DOCGIA, SACH, THETHUVIEN where MUONSACH.MA_THE = THETHUVIEN.MA_THE and THETHUVIEN.DOCGIA = DOCGIA.MA_DOCGIA and MUONSACH.MA_SACH = SACH.MA_SACH and MUONSACH.MA_THUTHU = THUTHU.MA_THUTHU`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    }
}


module.exports = MUONSACH;