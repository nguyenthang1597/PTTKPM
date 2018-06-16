var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = Schema({
    TEN: {
        type: String,
        require: true
    },
    NGAYSINH: {
        type: Date
    },
    NGAYMAT: {
        type: Date
    },
    THONGTIN: {
        type: String
    },
    picture: {
        type: String
    },
    isHide: {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Author', AuthorSchema);