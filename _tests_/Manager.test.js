// test manager constructor
const Manager = require('../lib/Manager')

// create intern object and test school
test('test office number', () => {
    const manager = new Manager('Rick', 30534, 'rick.barendse@Outlook.com', 'suite90'); 

    expect(manager.getOfficeNumber()).toEqual("suite90");
});

// gets manager role from getRole()
test('get manager role', () => {
    const manager = new Manager('Rick', 30534, 'rick.barendse@Outlook.com', 'suite90'); 

    expect(manager.getRole()).toEqual("Manager");
});