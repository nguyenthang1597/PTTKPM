var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = Schema({
    TEN: {
        type: String,
        require: true
    },
    isHide: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Genre', GenreSchema);