var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Rule = require('./Rule');
var BorrowSchema = Schema({
    THUTHU: {
        type: String,
        require: true
    },
    THE: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Card'
    },
    SACH: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Book'
    },
    SOLUONG: {
        type: Number,
        require: true
    },
    NGAYMUON: {
        type: Date
    },
    NGAYHETHAN: {
        type: Date
    },
    TINHTRANG: {
        type: Schema.Types.Boolean,
        default: false
    }
})

BorrowSchema.pre('save', function(next){
    this.NGAYMUON = new Date();
    var d = new Date(this.NGAYMUON);
    Rule.findOne({}, (err, result) => {
        d.setDate(d.getDate() + result.SONGAYMUON);
        this.NGAYHETHAN = d;
    })
    next()
})

module.exports = mongoose.model('Borrow', BorrowSchema);