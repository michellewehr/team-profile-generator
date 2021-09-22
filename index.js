const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

function getManager() {
    inquirer  
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your team manager's name?"
            },
            {
            type: 'text',
            name: 'id',
            message: "What is your manager's employee ID?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your manager's email address?"
            },
            {
            type: 'text',
            name: 'office',
            message: "What is your manager's office number?"
            }
        ])
        .then(managerInfo => {
            console.log(new Manager(managerInfo))
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

getManager();

