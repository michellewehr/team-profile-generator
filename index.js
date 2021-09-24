const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const createPage = require('./src/page-template');
const emailValidator = require('email-validator');

const team = [];


//prompt questions about manager 
function managerQuestions() {
    console.log(`
    ===============================================
    =======Begin building your team profile========
    ===============================================`);
    return inquirer  
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
            validate: name => {
                if (name) {
                  return true;
                } else {
                  return "Please enter your manager's name.";
                }
              }
            },
            {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee ID?",
            validate: id => {
              const pass = !isNaN(id);
              if (id && pass) {
                return true;
              } else {
                return 'Please enter a valid employee ID';
              }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?",
            validate: email => {
                if (emailValidator.validate(email) == true) {
                    return true;
                } else {
                    return 'Enter a valid email address.';
                }
            }
            },
            {
            type: 'input',
            name: 'office',
            message: "What is your team manager's office number?",
            validate: office => {
                const pass = !isNaN(office)
                if (office && pass) {
                  return true;
                } else {
                  return 'Please enter a valid office number';
                }
              }
            },
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another team member?'
            }
        ])
        .then(function(data) {
           const manager = new Manager(data.name, data.id, data.email, data.office);
           team.push(manager);
           if(data.confirmAdd) {
               chooseEmployee();
            } else {
                createPage(team)
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
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
            validate: name => {
                if (name) {
                  return true;
                } else {
                  return "Please enter your engineer's name.";
                }
              }
            },
            {
            type: 'input',
            name: 'id',
            message: "What is your engineer's employee ID?",
            validate: id => {
              const pass = !isNaN(id)
              if (id && pass) {
                return true;
              } else {
                return 'Please enter a valid employee ID';
              }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email address?",
            validate: email => {
              if (emailValidator.validate(email) == true) {
                  return true;
              } else {
                 return 'Enter a valid email address.';
              }
          }
            },
            {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  return "Please enter your engineer's GitHub username.";
                }
              }
            },
            {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: 'false'
            }
        ])
        .then(function(data) {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        if(data.confirmAdd) {
            chooseEmployee();
        } else {
            createPage(team)
            }
     })
     
}

//prompt questions about intern
function internQuestions() {
    return inquirer  
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
            validate: name => {
                if (name) {
                  return true;
                } else {
                  return "Please enter your intern's name.";
                }
              }
            },
            {
            type: 'input',
            name: 'id',
            message: "What is your intern's ID?",
            validate: id => {
              const pass = !isNaN(id)
              if (id && pass) {
                return true;
              } else {
                return 'Please enter a valid employee ID';
              }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: "What is your intern's email address?",
            validate: email => {
              if (emailValidator.validate(email) == true) {
                  return true;
              } else {
                  return 'Enter a valid email address.';
              }
          }
            },
            {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  return "Please enter your intern's school.";
                }
              }
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
           team.push(intern);
           if(data.confirmAdd) {
               chooseEmployee();
           } else {
            createPage(team);
           }
        })
}


managerQuestions()
    