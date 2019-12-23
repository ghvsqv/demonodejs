var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var employeesSchema = new Schema({
    name:{
        type: String,
        unique : false,
        required : false
    },
    email : {
        type: String,
        unique : false,
        required : false
    },
    address : {
        type: String,
        unique : false,
        required : false
    }
}, {
    timestamps: true
});

module.exports = employeesSchema;