class Employee {
    constructor(employeeName, ID, email, photo) {
        this.employeeName = employeeName;
        this.ID = ID;
        this.email = email;
        this.photo = photo;
    }

    getName(){
        return this.employeeName;
    }

    getId(){
        return this.ID;
    }

    getEmail(){
        return this.email;
    }

    getPhoto(){
        return this.photo;
    }

    getRole(){
        return (`Employee`);
    }
}

module.exports = Employee;