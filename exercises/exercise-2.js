// Exercise 2: Write a function that returns an array with the email addresses of all employees using a higher order function.

function getEmails(employees) {
    return employees.map(employee => {
        return employee.email;
    });
}

module.exports = getEmails;
