var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Publisher = Schema({
    TEN: {
        type: String,
        require: true
    },
    isHide: {
        type: Boolean,
        default: false
    },
    THONGTIN: {
        type: String
    }
})


module.exports = mongoose.model('Publisher', Publisher);