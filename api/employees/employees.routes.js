var Employees = require('./employees.controller');
module.exports = function(router) {
    router.get('/create', (req, res) => {
        res.render("employees/insertOrEdit", {
            title: "Insert Employee"
        })
    });
    router.post('/create', Employees.createEmployees);
    router.get('/get', Employees.getEmployees);
    router.get('/get/:name', Employees.getEmployeeByName);
    router.get('/update/:id', Employees.updateEmployee);
    //router.put('/update/:id', Employees.updateEmployee);
    router.get('/remove/:id', Employees.removeEmployee);
    //router.delete('/remove/:id', Employees.removeEmployee);

}