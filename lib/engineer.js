const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(employeeName, ID, email, photo, github) {

        super(employeeName, ID, email, photo);
        this.github = github;
    }

    getGithub(){

    }

    getRole(){
       return (`Engineer`); 
    }
}

module.exports = Engineer;