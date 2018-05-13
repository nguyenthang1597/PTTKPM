var mysql = require('../../config/mysql');

var ACCAD = {
    addID: (username, id) => {
        return new Promise((resolve, reject) => {
            var query = `update ADMINACC set ID = ${id} where USERNAME = '${username}'`
            console.log(query);
            mysql.query(query, (err, results, field) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    getAll: (role) => {
        return new Promise((resolve, reject) => {
            var query = `select USERNAME, ROLE, active from ADMINACC where ROLE < ${role}`;
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
            var query = `select USERNAME, ROLE, active from ADMINACC where USERNAME = '${username}'`;
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results[0]);
            })
        });
    },
    update: (account) => {
        return new Promise((resolve, reject) => {
            var query = `update ADMINACC set ROLE = '${account.ROLE}', active = '${account.active}' where USERNAME = '${account.USERNAME}'`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    deleteByUsername:  (username) => {
        return new Promise((resolve, reject) => {
            var query = `delete from ADMINACC where USERNAME = '${username}'`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    },
    addAccount: (account) => {
        return new Promise((resolve, reject) => {
            var query = `insert into ADMINACC(USERNAME, PASSWORD, ROLE, active) values ('${account.USERNAME}', '${account.PASSWORD}','${account.ROLE}', '1')`
            mysql.query(query, (err, results, fields) => {
                if(err)
                    reject(err);
                else
                    resolve(results);
            })
        });
    }
}


module.exports = ACCAD;