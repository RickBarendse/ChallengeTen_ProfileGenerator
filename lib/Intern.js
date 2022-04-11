// import from Employee constructor
const Employee = require('./Employee');

// Add intern data to employee super constructor
class Intern extends Employee {
    constructor ( name, id, email, school) {
        super (name, id, email);

        this.school= school
    }

    //Assign school to intern
    getSchool() {
        return this.school;
    }
    // Assign intern role to employee 
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;