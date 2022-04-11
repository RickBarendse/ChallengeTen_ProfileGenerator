// required modules
const fs = require('fs');
const inquirer = require('inquirer');


const generatePage = require('./src/generateHTML');

// required constructors for each employee type
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

// manager input prompts
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name. (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Manager name is required!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's employee ID. (required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Manager ID is required!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email address. (required)",
            validate:  emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Email address is required!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number. (required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Office number is required')
                    return false;
                }
            }
        },
    ])

    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
    })
};

const addEmployee = employeeData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role? (required",
            choices: ['Engineer', 'Intern'],
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must provide an employee name!')
                    return false;
                }  
            }      
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee ID. (required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Employee ID is required!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email address. (required)",
            validate:  emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Email address is required!')
                    return false;
                }
            }    
        },

        {
            type: 'input',
            name: 'username',
            message: "Please enter the employee's GitHub username. (required)",
            when: (input) => input.role === "Engineer",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Make sure you include employee's GitHub username!")
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school. (required)",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Make sure you include the intern's school!")
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, username, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, username);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


// function to generate HTML page using the file system
const writeFile = data => {
    fs.writeFile ('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created.")
        }
    })
};


promptManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err)
    });
