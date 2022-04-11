// test intern constructor
const Intern = require('../lib/Intern')

// create intern object and test school
test('test school', () => {
    const intern = new Intern('Rick', 30534, 'rick.barendse@Outlook.com', 'UCLA'); 

    expect(intern.school).toEqual("UCLA");
});

// gets intern role from getRole()
test('get intern role', () => {
    const intern = new Intern('Rick', 30534, 'rick.barendse@Outlook.com', 'UCLA'); 

    expect(intern.getRole()).toEqual("Intern");
});