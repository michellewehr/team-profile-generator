const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const fs = require('fs')

function writeCards(team) {
    const cards = team.map(member => {
        return member.getCard();
    });
    return cards.join("\n")
}

function generatePage(team) {
    
      return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <main class="container my-5">
         ${ writeCards(team) }
    </main>
   
  </body>
  </html>
  `
}

function createPage(team) {
    console.log(team);
    fs.writeFile('./index.html', generatePage(team), function(err) {
        if(err) {
            throw err;
        } else {
            console.log('FINALLY!');
        }
    })
}

//   const createPage = team => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('../dist/index.html', generatePage(team), err => {
//             //if thres an error, reject the Promise and send the error to the promise's '.catch()' method
//             if (err) {
//                 reject (err);
//                 //return out of the funciton here to make sure the Promise doesn't accidently execute the resolve() function as well 
//                 return;
//             }
//             //if everything went well, resolve the promise and send the successful date to the '.then()' method
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         })
//     });
// }

module.exports = createPage;