// const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getRole = function() {
        return 'Employee';
    }
    }
// }

// Employee.prototype.getName = function() {
//     return inquirer 
//     .prompt(
//         {type: 'text',
//         name: 'name',
//         message: "What is your team members's name?"
//         })
//         .then((name) => {
//            return name;
//         })
// }

// Employee.prototype.getId = function() {
//     return inquirer 
//     .prompt(
//         {type: 'text',
//         name: 'id',
//         message: "What is your team members's ID?"
//         })
//         .then((id) => {
//           return id;
//         })
// }

// Employee.prototype.getEmail = function() {
//     return inquirer 
//     .prompt(
//         {type: 'text',
//         name: 'email',
//         message: "What is your team members's email address?"
//         })
//         .then((email) => {
//            return email;
//         })
}

let employee = new Employee(this.getName, this.getId, this.getEmail)

module.exports = Employee;
