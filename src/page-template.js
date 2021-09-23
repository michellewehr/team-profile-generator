const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs')

// function generateTeam(team) {
//    console.log(team);
// }

const managerArr = [];
const engineerArr = [];
const internArr = [];

function generatePage(team) {
    console.log(team);
   team.forEach(member => { 
    
       return member.getCard();
        // if(member.getRole() === 'Manager') {
        //     managerArr.push(member);
        // }
        // else if(member.getRole() === 'Engineer') {
        //     engineerArr.push(member);
        // }
        // else if(member.getRole() === 'Intern') {
        //     internArr.push(member);
        // }
    })

    // console.log(internArr);

}

function createPage(team) {
        return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <main class="container my-5">
         ${ generatePage(team) }
    </main>
   
  </body>
  </html>
  `
}



module.exports = generatePage;