// import from Employee constructor
const Employee = require('./Employee');

// Add manager data to employee super constructor
class Engineer extends Employee {
    constructor ( name, id, email, username ) {
        super (name, id, email);

        this.username = username
    }

    // Assign Engineer role to employee 
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;