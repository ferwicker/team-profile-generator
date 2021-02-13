const Employee = require('./employee.js');

class TeamLeader extends Employee {
    constructor(employeeName, ID, email, photo, office) {
        
        super(employeeName, ID, email, photo);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole(){
        return (`Team Leader`);
    }
}

module.exports = TeamLeader;