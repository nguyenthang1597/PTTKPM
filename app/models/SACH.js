var mysql = require('../../config/mysql');


var SACH = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, NXB.TEN as TENNXB from SACH, NHAXUATBAN as NXB where SACH.NXB = NXB.MA_NXB`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.CONTENT, SACH.SUMMARY from SACH where MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            })
        });
    },

    updateSACH: (SACH) => {
        return new Promise((resolve, reject) => {
            var query = `UPDATE SACH SET TEN = '${SACH.TEN}',SOLUONG='${SACH.SOLUONG}', isHide='${SACH.isHide}', isHighlight= '${SACH.isHighlight}', picture='${SACH.picture}' , NGAYCAPNHAT='${SACH.NGAYCAPNHAT}', SUMMARY='${SACH.SUMMARY}', CONTENT='${SACH.CONTENT}' WHERE MA_SACH='${SACH.MA_SACH}';`
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    addSACH: (SACH) => {
        return new Promise((resolve, reject) => {
            var query = `insert into SACH (TEN, NXB, NGAYNHAP, SOLUONG, NAMXB, isHide, isHighlight, picture, NGAYCAPNHAT) values ('${SACH.TEN}','${SACH.NXB}','${SACH.NGAYNHAP}', ${SACH.SOLUONG}, ${SACH.NAMXB}, ${SACH.isHide}, ${SACH.isHighlight}, '${SACH.picture}', '${SACH.NGAYCAPNHAT}')`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            var query = `delete from SACH where MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    Hide: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update SACH set isHide = '${info.isHide}' where MA_SACH = '${info.MA_SACH}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    Highlight: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update SACH set isHighlight = '${info.isHighlight}' where MA_SACH = '${info.MA_SACH}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    getAuthor: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select DSTACGIA.MA_TACGIA from SACH, DSTACGIA where SACH.MA_SACH = DSTACGIA.MA_SACH and SACH.MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            })
        });
    }

}


module.exports = SACH;