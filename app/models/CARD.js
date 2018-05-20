var mysql = require('../../config/mysql');

var CARD = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select THETHUVIEN.MA_THE, DATE_FORMAT(THETHUVIEN.HSD, '%d/%m/%Y') as HSD, DATE_FORMAT(THETHUVIEN.NGAYLAP, '%d/%m/%Y') as NGAYLAP, DOCGIA.TEN from THETHUVIEN, DOCGIA where THETHUVIEN.DOCGIA = DOCGIA.MA_DOCGIA`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    addNew:(card) => {
        return new Promise((resolve, reject) => {
            var query = `insert into THETHUVIEN (NGAYLAP, HSD, DOCGIA) values ('${card.NGAYLAP}','${card.HSD}','${card.DOCGIA}')`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select THETHUVIEN.MA_THE, DATE_FORMAT(THETHUVIEN.HSD,  '%Y-%m-%d') as HSD, DATE_FORMAT(THETHUVIEN.NGAYLAP, '%d/%m/%Y') as NGAYLAP from THETHUVIEN where MA_THE = '${id}'`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results[0]);
            })
        });
    },
    update: (card) => {
        return new Promise((resolve, reject) => {
            var query = `update THETHUVIEN set HSD = '${card.HSD}' where MA_THE = '${card.MA_THE}'`
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
            var query = `delete from THETHUVIEN where MA_THE = '${id}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    }
}

module.exports = CARD;