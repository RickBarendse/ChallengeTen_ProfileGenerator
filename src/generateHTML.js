                    // create manager card
                    const createManager = function (manager) {
                        return `
                        <div class="col-4 mt-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h3>${manager.name}</h3>
                                    <h4>Manager</h4>
                                </div>

                                <div class="card-body">
                                    <p class="id">ID:  ${manager.id}</p>
                                    <p class="email">Email:  <a: href="mailto:${manager.email}">${manager.email}</a></p>
                                    <p class="detail">Office Number:  ${manager.officeNumber}</p>
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

                                <div class="card-body">
                                    <p class="id">ID:  ${engineer.id}</p>
                                    <p class="email">Email:<a: href="mailto:${engineer.email}">${engineer.email}</a></p>
                                    <p class="detail">GitHub Link: <a href="https://github.com/${engineer.username}" target="_blank">${engineer.username}</a></p>
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
                                    <h4>Intern</h4>
                                </div>

                                <div class="card-body">
                                    <p class="id">ID:  ${intern.id}</p>
                                    <p class="email">Email:  <a: href="mailto:${intern.email}">${intern.email}</a></p>
                                    <p class="detail">School: ${intern.school}</p>
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
        <link rel="stylesheet" href="style.css">
        </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>

            <main>
                <div class="container">
                    <div class="row-justify-content-center" id="team-cards">
                        ${employeeCards}
                    </div>
                </div>
            </main>

        <footer>
        </footer>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </html>
  `;
 };    

 module.exports = generateHTML;