const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs')

function generateTeam(data) {
    return `${data}`;
  
}

function generatePage() {
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



module.exports = generatePage;