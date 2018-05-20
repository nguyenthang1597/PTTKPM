var mysql = require('../../config/mysql')

var MUONSACH = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select MUONSACH.MA_THUTHU, MUONSACH.MA_SACH, MUONSACH.MA_THE, MUONSACH.SOLUONG, MUONSACH.TINHTRANG, DATE_FORMAT(MUONSACH.NGAYMUON, '%Y%m%d') as NGAYMUON, THUTHU.TEN as TENTHUTHU, DOCGIA.TEN as TEN, DOCGIA.MA_DOCGIA as MA_DOCGIA, SACH.TEN as TENSACH from MUONSACH, THUTHU, DOCGIA, SACH, THETHUVIEN where MUONSACH.MA_THE = THETHUVIEN.MA_THE and THETHUVIEN.DOCGIA = DOCGIA.MA_DOCGIA and MUONSACH.MA_SACH = SACH.MA_SACH and MUONSACH.MA_THUTHU = THUTHU.MA_THUTHU`
            
            mysql.query(query, (err, results, fields) => {
            console.log(results);
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    add: (info) => {
        return new Promise((resolve, reject) => {
            var query = `insert into MUONSACH (MA_THUTHU, MA_SACH, MA_THE, SOLUONG, NGAYMUON, TINHTRANG) values ('${info.MA_THUTHU}','${info.MA_SACH}','${info.MA_THE}','${info.SOLUONG}','${info.NGAYMUON}',0)`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    trasach: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update MUONSACH set TINHTRANG = 1 where MA_SACH = '${info.MA_SACH}' and MA_THUTHU = '${info.MA_THUTHU}' and MA_THE = '${info.MA_THE}' and NGAYMUON = '${info.NGAYMUON}'`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    getBook: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select NXB.TEN as NXB, SACH.TEN as TEN, THELOAI.TEN as THELOAI, TACGIA.TEN as TACGIA, MUONSACH.* from NHAXUATBAN as NXB, SACH, THELOAI, TACGIA, DSTHELOAI, DSTACGIA, THETHUVIEN, MUONSACH where SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA and SACH.MA_SACH = MUONSACH.MA_SACH and MUONSACH.MA_THE = THETHUVIEN.MA_THE and SACH.NXB = NXB.MA_NXB and THETHUVIEN.DOCGIA = '${id}'`
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