var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = Schema({
    HSD: {
        type: Date,
        require: true
    },
    NGAYLAP: {
        type: Date
    },
    DOCGIA: {
        type: Schema.Types.ObjectId,
        ref: 'Info'
    }
});

CardSchema.pre('save', function(next){
    this.NGAYLAP = new Date();
    next();
});

module.exports = mongoose.model('Card', CardSchema);