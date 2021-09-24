
const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    };
    getOffice() {
        return this.office;
    };
    getRole() {
        return 'Manager';
    };
    getCard() {
        return `
        <div class="card column is-one-third-desktop is-half-tablet">
        <div class="card-content">

        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <i class="fas fa-mug-hot"></i>
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4"> ${this.getName()} </p>
            <p class="subtitle is-6"> ${this.getRole()}</p>
        </div>
        </div>

        <div class="content">
            <ul>
                <li>ID: ${this.getId()} </li>
                <li><a href="mailto:${this.getEmail()}">Email </a> </li>
                <li> Office Number: ${this.getOffice()} </li>
            </ul>
        </div>
        </div>
    </div>
        `
    }
}








module.exports = Manager;