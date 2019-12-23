var Employees = require('./employees.doa');

exports.createEmployees = function(req, res, next){

    var employee = {
        name : req.body.name,
        email: req.body.email,
        address: req.body.address
    }

    // create 
    Employees.create(employee, function(err, employee){

        if(err){
            res.json({
                error: err
            })
        }

        res.json({
            message: "You have created Employee successful"
        })

    }) 
}

exports.getEmployees = function(req, res, next) {
    Employees.get({}, function(err, employees) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            employees: employees
        })
    })
}

exports.getEmployeeByName = function(req, res, next){
    Employees.get({name:req.params.name}, function(err, employee){
        if(err){res.json({error:err})}
        res.json({employees:employee})
    })
}


exports.updateEmployee = function(req, res, next){
    var employee = {
        /*name : req.body.name,
        email: req.body.email,
        address: req.body.address*/
        name: 'Vinh1',
        email:'vinh1@vietswiss.com',
        address:'vinh1street'
    }


    Employees.update({_id:req.params.id}, employee, function(err, employee){
        if(err){res.json({error:err})}
        res.json({
            message : "Employee updated successfully"
        })
    })
}

exports.removeEmployee = function(req, res, next) {
    Employees.delete({_id: req.params.id}, function(err, employee) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Employee deleted successfully"
        })
    })
}

