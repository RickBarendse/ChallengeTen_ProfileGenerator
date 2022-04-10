// import from Employee constructor
const Employee = require('./Employee');

// Add manager data to employee super constructor
class Manager extends Employee {
    constructor ( name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber
    }

    // Assign Manager role to employee 
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;