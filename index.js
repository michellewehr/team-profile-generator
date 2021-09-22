const { template } = require('@babel/core');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const team = [];

//prompt questions about employee
function questions() {
    return inquirer  
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your team members's name?"
            },
            {
            type: 'text',
            name: 'id',
            message: "What is your team member's employee ID?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your team members's email address?"
            },
        ])
        .then(function(data) {
           const employee = new Employee(data.name, data.id, data.email);
           team.push(employee);
           return team;
        })
        .then(function(team) {
            console.log(team);
        })
}

function confirmAdd(managerData) {
    inquirer
    .prompt({
        type: 'confirm',
        name: 'confirmAdd',
        message: "Would you like to add another team member to your team's profile?"
    })
    .then(confirmData => {
        if (confirmData.confirmAdd) {
            console.log('need addMember function to run here');
        } else {
            return managerData;
        }
    })
}

questions();


