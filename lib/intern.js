const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(employeeName, ID, email, photo, school) {

        super(employeeName, ID, email, photo);
        this.school = school;
    }

    getSchool(){

    }

    getRole(){
       return (`Intern`); 
    }
}

module.exports = Intern;