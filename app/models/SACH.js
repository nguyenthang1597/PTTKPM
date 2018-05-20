var mysql = require('../../config/mysql');


var SACH = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.SOLUONGCONLAI, NXB.TEN as TENNXB, THELOAI.TEN as THELOAI, TACGIA.TEN as TACGIA from SACH, NHAXUATBAN as NXB , THELOAI, DSTHELOAI, TACGIA, DSTACGIA where SACH.NXB = NXB.MA_NXB and SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    getAllIndex: () => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.SOLUONGCONLAI, NXB.TEN as TENNXB, THELOAI.TEN as THELOAI, TACGIA.TEN as TACGIA from SACH, NHAXUATBAN as NXB , THELOAI, DSTHELOAI, TACGIA, DSTACGIA where SACH.NXB = NXB.MA_NXB and SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA and SACH.isHide = 0 and TACGIA.isHide = 0 and THELOAI.isHide = 0`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    },
    getAllHighlight: () => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.SOLUONGCONLAI, NXB.TEN as TENNXB, THELOAI.TEN as THELOAI, TACGIA.TEN as TACGIA from SACH, NHAXUATBAN as NXB , THELOAI, DSTHELOAI, TACGIA, DSTACGIA where SACH.NXB = NXB.MA_NXB and SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA and SACH.isHide = 0 and SACH.isHighlight = 1 and TACGIA.isHide = 0 and THELOAI.isHide = 0`;
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
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.CONTENT, SACH.SUMMARY, SACH.SOLUONGCONLAI from SACH where MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            })
        });
    },
    getByIdIndex: (id) => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.*, TACGIA.TEN as TACGIA, TACGIA.MA_TACGIA, THELOAI.TEN as THELOAI, NXB.TEN as NXB from SACH, NHAXUATBAN as NXB , THELOAI, DSTHELOAI, TACGIA, DSTACGIA where SACH.NXB = NXB.MA_NXB and SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA and SACH.MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            })
        });
    },
    getByGenre: (genre) => {
        return new Promise((resolve, reject) => {
            var query = `select SACH.MA_SACH, SACH.TEN, DATE_FORMAT(SACH.NGAYNHAP, '%d/%m/%Y') as NGAYNHAP, SACH.SOLUONG, SACH.NAMXB, SACH.isHide, SACH.isHighlight, SACH.picture, SACH.NGUOINHAP, DATE_FORMAT(SACH.NGAYCAPNHAT, '%d/%m/%Y') as NGAYCAPNHAT, SACH.SOLUONGCONLAI, NXB.TEN as TENNXB, THELOAI.TEN as THELOAI, TACGIA.TEN as TACGIA from SACH, NHAXUATBAN as NXB , THELOAI, DSTHELOAI, TACGIA, DSTACGIA where SACH.NXB = NXB.MA_NXB and SACH.MA_SACH = DSTHELOAI.MA_SACH and DSTHELOAI.MA_THELOAI = THELOAI.MA_THELOAI and SACH.MA_SACH = DSTACGIA.MA_SACH and DSTACGIA.MA_TACGIA = TACGIA.MA_TACGIA and THELOAI.MA_THELOAI = '${genre}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
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
            var query = `insert into SACH (TEN, NXB, NGAYNHAP, SOLUONG, NAMXB, isHide, isHighlight, picture, NGAYCAPNHAT, NGUOINHAP) values ('${SACH.TEN}','${SACH.NXB}','${SACH.NGAYNHAP}', ${SACH.SOLUONG}, ${SACH.NAMXB}, ${SACH.isHide}, ${SACH.isHighlight}, '${SACH.picture}', '${SACH.NGAYCAPNHAT}', '${SACH.NGUOINHAP}')`;
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
            var query = `select DSTACGIA.* from SACH, DSTACGIA where SACH.MA_SACH = DSTACGIA.MA_SACH and SACH.MA_SACH = '${id}'`;
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result[0]);
            })
        });
    },
    updateSLCL: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update SACH set SOLUONGCONLAI = SOLUONGCONLAI - ${info.SOLUONG} where MA_SACH = '${info.MA_SACH}'`
            mysql.query(query, (err, result, fields) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            })
        });
    }

}


module.exports = SACH;