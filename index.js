const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const generatePage = require('./src/page-template');
const fs = require('fs');




const team = [];

//prompt questions about manager 
function managerQuestions() {
    return inquirer  
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your team manager's name?"
            },
            {
            type: 'text',
            name: 'id',
            message: "What is your team manager's employee ID?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your team manager's email address?"
            },
            {
            type: 'text',
            name: 'office',
            message: "What is your team manager's office number?"
            },
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(function(data) {
           const manager = new Manager(data.name, data.id, data.email, data.office);
        //    managerArr.push(manager);
           team.push(manager);
           if(data.confirmAdd) {
               chooseEmployee();
           } else {
               return team;
           }
        })
}

// choose employee to add. gets ran if user selects add another employee
function chooseEmployee() {
    return inquirer
    .prompt(
        {
            type: 'list',
            name: 'typeEmployee',
            choices: ['Engineer', 'Intern']
        }
    )
    .then(function(data) {
        if(data.typeEmployee === 'Engineer') {
            engineerQuestions();
        } else {
            internQuestions();
        } 
    })
}

//prompt questions about engineer
function engineerQuestions() {
    return inquirer  
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your engineer's name?"
            },
            {
            type: 'text',
            name: 'id',
            message: "What is your engineer's employee ID?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your engineer's email address?"
            },
            {
            type: 'text',
            name: 'github',
            message: "What is your engineer's GitHub?"
            },
            {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: false
            }
        ])
        .then(function(data) {
           const engineer = new Engineer(data.name, data.id, data.email, data.github);
        //    engineerArr.push(engineer);
        team.push(engineer);
        if(data.confirmAdd) {
            chooseEmployee();
        } else {
            return team;
        }
     })
}

//prompt questions about intern
function internQuestions() {
    return inquirer  
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your intern's name?"
            },
            {
            type: 'text',
            name: 'id',
            message: "What is your intern's ID?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your intern's email address?"
            },
            {
            type: 'text',
            name: 'school',
            message: "What is your intern's school?"
            },
            {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: 'false'
            }
        ])
        .then(function(data) {
           const intern = new Intern(data.name, data.id, data.email, data.school);
        //    internArr.push(intern);
           team.push(intern);
           if(data.confirmAdd) {
               chooseEmployee();
           } else {
               return team;
           }
        })
}

managerQuestions()
    .then(team => {
        fs.writeFile('./dist/index.html', generatePage(team), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log('Success!');
        }) 
    });
    


