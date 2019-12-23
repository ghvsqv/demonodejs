var mongoose = require('mongoose');
var employeesSchema = require('./employees.model');

employeesSchema.statics = {
    create : function(data, cb) {
        var employee = new this(data);
        employee.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var employeesModel = mongoose.model('Employees', employeesSchema);
module.exports = employeesModel;