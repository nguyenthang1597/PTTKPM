var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RuleSchema = Schema({
    SONGAYMUON: {
        type: Number,
        require: true
    },
    SOSACHTOIDA: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Rule', RuleSchema);