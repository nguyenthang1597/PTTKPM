var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var InfoSchema = Schema({
    TEN: {
        type: String,
        require: true
    },
    NGAYSINH: {
        type: Date
    },
    EMAIL: {
        type: String
    },
    GIOITINH: {
        type: Boolean
    },
    DIACHI: {
        type: String
    },
    CMND: {
        type: String,
        max: 12
    },
    SDT: {
        type: String,
        max: 11
    }
});

module.exports = mongoose.model('Info', InfoSchema);