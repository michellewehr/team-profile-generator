
const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email, office);
   
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
// this.office = data.office;








module.exports = Manager;