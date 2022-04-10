// create manager card
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body".
                <p class="id">ID:  ${manager.id}</p>
                <p class="email">Email:  <a: href="mailto:${manager.email}</a></p>
                <p class="office">Office Number:  ${manager.officeNumber}</p>
            </div>
        </div>
    </div>                
    `;
}

// create engineer card
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body".
                <p class="id">ID:  ${engineer.id}</p>
                <p class="email">Email:  <a: href="mailto:${engineer.email}</a></p>
                <p class="github">GitHub Link: <a href="https://github.com/${engineer.github}></p>
            </div>
        </div>
    </div>                
    `;
}

// create intern card
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body".
                <p class="id">ID:  ${intern.id}</p>
                <p class="email">Email:  <a: href="mailto:${intern.email}</a></p>
                <p class="school">School: ${intern.school}></p>
            </div>
        </div>
    </div>                
    `;
}


// push array to page
generateHTML = (data) =>{

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee)

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}

// create the HTML page
const createTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>

        <main>
        </main>

        <footer>
        </footer>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
 };    

 module.exports = generateHTML;