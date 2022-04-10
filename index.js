const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Employee name is required!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee ID. (required)',
            validate: idInput => {
                if (idInput) {
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
            message: 'Enter employee email address. (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Email address is required!')
                    return false;
                }
            }
        }
    ])
}

promptUser()
    .then(promptUser => {
    return generatePage(promptUser);
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

