const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateTeam(teamArr) {
    console.log(teamArr);
    // var managerArr = teamArr.filter((el) => {
    //     return el.getRole() = 'Manager';
    // })
    // managerArr.forEach(manager => {
    //     return manager.getCard();
    // })
}

module.exports = templateData => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <main class="container my-5">
         ${ generateTeam() }
    </main>
   
  </body>
  </html>
  `
}

