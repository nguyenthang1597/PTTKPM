var mysql = require('../../config/mysql');

var ACCUSER = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var query = `select * from USERACC`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    getByUsername: (username) => {
        return new Promise((resolve, reject) => {
            var query = `select * from USERACC where USERNAME = '${username}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results[0]);
            })
        });
    },
    update: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update USERACC set active = '${info.active}' where USERNAME = '${info.USERNAME}'`
            mysql.query(query, (err, results, filds) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    setID: (info) => {
        return new Promise((resolve, reject) => {
            var query = `update USERACC set ID = '${info.ID}' where USERNAME = '${info.USERNAME}'`
            mysql.query(query, (err, results, filds) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    addNew: (account) => {
        return new Promise((resolve, reject) => {
            var query = `insert into USERACC (USERNAME, PASSWORD, active) values ('${account.USERNAME}','${account.PASSWORD}', '1')`
            mysql.query(query, (err, results, filds) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
}

module.exports = ACCUSER