const inquirer = require("inquirer");

// function startPrompt() {
//     console.log(`
//     ==================================================
//     ==================================================
//     Answer these questions to build your team profile:
//     `
//     )
//     .then(() => {
//         getManager()
//     });
// }
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
            name: 'office-number',
            message: "What is your manager's office number?"
            }
        ])
        .then((managerData) => {
            confirmAdd(managerData)
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
            addMember(managerData);
        } else {
            return;
        }
    })
}

getManager();


