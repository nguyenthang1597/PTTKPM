var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var db = require('../../config/mongo')

var Schema = mongoose.Schema;

var AccountSchema = Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        min: 0,
        max: 3
    },
    info: {
        type: Schema.Types.ObjectId,
        ref: 'Info'
    },
    active: {
        type: Boolean,
        default: 1
    }
});

AccountSchema.pre('save', function(next) {
    var hash = bcrypt.hashSync(this.password, bcrypt.genSaltSync(bcrypt.getRounds('abcxyz')));
    this.password = hash;
    next();
})

module.exports = mongoose.model('Account', AccountSchema);