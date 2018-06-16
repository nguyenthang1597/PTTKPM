var Account = require('./app/model/Account');
var Info = require('./app/model/Info');
var mongoose = require('mongoose');
var Author = require('./app/model/Author')
var Genre = require('./app/model/Genre')
var Publisher = require('./app/model/Publisher')
var Card = require('./app/model/Card');
var Borrow = require('./app/model/Borrow')
var Rule = require('./app/model/Rule')
// Card.create({
//     HSD: new Date(),
//     DOCGIA: mongoose.Types.ObjectId('5b0a2494c268f37bb4ccd94e')
// })
// .then(res => {
//     console.log(res);
// })

Borrow.create({
    THUTHU: "Nguyễn Hiếu Thắng",
    THE: mongoose.Types.ObjectId('5b176a27e0ed2103e8c65238'),
    SACH: mongoose.Types.ObjectId('5b10535a1cece72e21e670af')
})
.then(res => {
    console.log(res);
})
