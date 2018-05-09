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
    }
}


module.exports = ACCAD;