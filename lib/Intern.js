
const Employee = require('./Employee');


class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };
    getCard() {
        return `
        <div class="card">
            <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">        </p>
                <p class="subtitle is-6"> ${this.getRole()}</p>
            </div>
            </div>

            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
            </div>
        </div>
        `
    }
}








module.exports = Intern;