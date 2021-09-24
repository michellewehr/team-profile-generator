const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs')

// function generateTeam(team) {
//    console.log(team);
// }



// function generatePage(team) {
//       const file = `
//     <!DOCTYPE html> 
//     <html lang="en"> 

//     <main class="container my-5">
//          ${ generatePage(team) }
//     </main>
   
//   </body>
//   </html>
//   `
//   console.log(file);
//   }


function createPage(team) {
    team.forEach(member => {
       console.log(member.getCard());
    })
}



module.exports = createPage;