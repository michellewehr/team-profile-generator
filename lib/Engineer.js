
const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
    getCard() {
        return `
        <div class="card">
        <div class="card-content">

        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
                <i class="fas fa-keyboard"></i>
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
                <li><a href="mailto:${this.getEmail()}">Email</a> </li>
                <li> GitHub: <a href="https://www.github.com/${this.getGithub()}>${this.getGithub()}</a></li>
            </ul>
        </div>
        </div>
    </div>
        `
    }
}








module.exports = Engineer;