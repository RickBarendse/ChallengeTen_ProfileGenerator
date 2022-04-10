// Create employee super constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get employee name from user input
    getName() {
        return this.name;
    }

    // get employee id from user input
    getId() {
        return this.id;
    }

    // get employee email from user input
    getEmail() {
        return this.email;
    }

    // assign employee as role.  will be overwritten in specific role constructor
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;