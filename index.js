const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Manager = require('./lib/Manager');


const teamArray = [];


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
            message: "Enter manager's email address. (required)'",
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

        {
            type: 'confirm',
            name: 'confirmTeam',
            message: 'Would you like to add team members?',
            default: true
        },
          
        {
            type: 'list',
            name: 'roleList',
            message: "What is the employee's role? (required",
            choices: ['Engineer', 'Intern'],
            when: ({ confirmTeam }) => {
                if (confirmTeam) {
                    return true 
                } else {
                    return false;
                }
            }
        }
    ])

    .then(managerData => {
        const { managerName, managerId, managerEmail, officeNumber } = managerData;
        const manager = new Manager (managerName, managerId, managerEmail, officeNumber);
        teamArray.push(manager);

        if (managerData.confirmTeam) {
            return addEmployee();
        } else {
            return
        }
    })
};

const addEmployee = employeeData => {
    console.log(
        `========================
         Add a employee to roster
         ========================
        `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name? (required)",
            validat: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log('You must provide an employee name!')
                    return false;
                }  
            }      
        },

        {
            type: 'input',
            name: 'employeeId',
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
            name: 'employeeEmail',
            message: "Enter employee's email address. (required)",
            validate:  employeeEmailInput => {
                if (employeeEmailInput) {
                    return true;
                } else {
                    console.log('Email address is required!')
                    return false;
                }
            }    
        },
    ])
}

promptManager()
    .then(promptManager => {
    return generatePage(promptManager);
})
.then(pageHTML => {
    return writeFile (pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});

