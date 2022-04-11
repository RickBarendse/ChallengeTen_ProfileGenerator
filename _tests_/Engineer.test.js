// test Engineer constructor
const Engineer = require('../lib/Engineer')

// create Engineer object and test username
test('test username', () => {
    const engineer = new Engineer('Rick', 30534, 'rick.barendse@Outlook.com', 'rickbarendse'); 

    expect(engineer.getUsername()).toEqual("rickbarendse");
});

// gets engineer role from getRole()
test('get engineer role', () => {
    const engineer = new Engineer('Rick', 30534, 'rick.barendse@Outlook.com', 'rickbarendse'); 

    expect(engineer.getRole()).toEqual("Engineer");
});
