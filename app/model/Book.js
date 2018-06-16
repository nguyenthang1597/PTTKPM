var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = Schema({
    TEN: {
        type: String,
        require: true
    },
    NXB: {
        type: Schema.ObjectId,
        ref: 'Publisher',
        require: true
    },
    THELOAI: [{
        type: Schema.ObjectId,
        ref: 'Genre'
    }],
    TACGIA: [{
        type: Schema.ObjectId,
        ref: 'Author',
        require: 'true'
    }],
    NGAYNHAP: {
        type: Date,
        default: Date.now()
    },
    SOLUONG: {
        type: Number
    },
    SOLUONGCONLAI: {
        type: Number
    },
    NAMXB: {
        type: Number,
        min: 0
    },
    isHide: {
        type: Boolean,
        default: false
    },
    isHighlight: {
        type: Boolean,
        default: false
    },
    picture: {
        type: String
    },
    NGAYCAPNHAT: {
        type: Date
    },
    SUMMARY: {
        type: String
    }

})

BookSchema.pre('save', function(next){
    this.SOLUONGCONLAI = this.SOLUONG;
    next();
})



module.exports = mongoose.model('Book', BookSchema);