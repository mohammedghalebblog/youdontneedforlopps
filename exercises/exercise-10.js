// Exercise 10: Write a function that return the number of employees in each Department.

function employeesPerDepartment(employees) {
    return employees.reduce((employeesPerDepartment, employee) => {
        employeesPerDepartment.hasOwnProperty(employee.department) ?
            employeesPerDepartment[employee.department] = ++employeesPerDepartment[employee.department] :
            employeesPerDepartment[employee.department] = 1;

        return employeesPerDepartment;
    }, {});
}

module.exports = employeesPerDepartment;
