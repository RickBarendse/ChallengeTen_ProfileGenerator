// test Employee constructor
const { TestWatcher } = require('jest')
const Employee = require('../lib/Employee')

// create employee object
test ('create an employee object', () => {
    const employee = new Employee('Rick', 30534, 'rick.barendse@Outlook.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets employee name from getName()
test('get employee name', () => {
    const employee = new Employee('Rick', 30534, 'rick.barendse@Outlook.com'); 

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets employee id from getId()
test('get employee id', () => {
    const employee = new Employee('Rick', 30534, 'rick.barendse@Outlook.com'); 

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets employee email from getEmail()
test('get employee email', () => {
    const employee = new Employee('Rick', 30534, 'rick.barendse@Outlook.com'); 

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets employee role from getRole()
test('get employee role', () => {
    const employee = new Employee('Rick', 30534, 'rick.barendse@Outlook.com'); 

    expect(employee.getRole()).toEqual("Employee");
});
