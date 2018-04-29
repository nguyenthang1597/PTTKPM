

var bcrypt = require('bcrypt-nodejs');


let hash = bcrypt.hashSync('abc', null, null);

console.log(hash.length);