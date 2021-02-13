const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const TeamLeader = require('./lib/teamleader.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./utils/generateHTML.js')

const teamMembers = [];

// inquirer questions
const optionsMenu = {
    type: 'list',
    message: 'Would you like to add another team member?',
    choices: ['Add engineer', 'Add intern', 'I am done adding team members'],
    name: 'menuChoice',
}

const leaderQuestions = [
    {
        type: 'input',
        message: "Enter the team leader's name:",
        name: 'employeeName',
    },
    {
        type: 'input',
        message: "Enter the team leader's employee ID:",
        name: 'employeeID',
    },
    {
        type: 'input',
        message: "Enter the team leader's email:",
        name: 'email', 
    },
    {
        type: 'input',
        message: "Enter the team leader's office number:",
        name: 'office',
    },
    {
        type: 'input',
        message: "Enter the team leader's photo source link:",
        name: 'photo',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter the team member's name:",
        name: 'employeeName',
    },
    {
        type: 'input',
        message: "Enter the team member's employee ID:",
        name: 'employeeID',
    },
    {
        type: 'input',
        message: "Enter the team member's email:",
        name: 'email', 
    },
    {
        type: 'input',
        message: "Enter the team member's github username:",
        name: 'github',
    },
    {
        type: 'input',
        message: "Enter the team member's photo source link:",
        name: 'photo',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "Enter the intern's name:",
        name: 'employeeName',
    },
    {
        type: 'input',
        message: "Enter the intern's employee ID:",
        name: 'employeeID',
    },
    {
        type: 'input',
        message: "Enter the intern's email:",
        name: 'email', 
    },
    {
        type: 'input',
        message: "Enter the intern's school:",
        name: 'school',
    },
    {
        type: 'input',
        message: "Enter the intern's photo source link:",
        name: 'photo',
    }
];

// helper functions

function menu () {
    inquirer
        .prompt (optionsMenu)
            .then((data) => {
                if (data.menuChoice === 'Add engineer'){
                    console.log("Let's add an engineer!");
                    addEngineer();
                } else if (data.menuChoice === 'Add intern'){
                    console.log("Let's add an intern!");
                    addIntern();
                } else {
                    generateHTML(teamMembers);
                    console.log('Finished adding your team! See the generated HTML file in the folder.');
                }
            });
}

function addTeamLeader () {
    inquirer
        .prompt (leaderQuestions)
            .then((data) => {
                const teamLeader = new TeamLeader(data.employeeName, data.employeeID, data.email, data.photo, data.office);
                addMember(teamLeader);
                menu();
            });    
}

function addEngineer () {
    inquirer
        .prompt (engineerQuestions)
            .then((data) => {
                const engineer = new Engineer(data.employeeName, data.employeeID, data.email, data.photo, data.github);
                addMember(engineer);
                menu();
            });
}

function addIntern() {
    inquirer
        .prompt (internQuestions)
            .then((data) => {
                const intern = new Intern(data.employeeName, data.employeeID, data.email, data.photo, data.school);
                addMember(intern);
                menu();
            });
}

function addMember(info) {
    let object = {};
        object['name'] = info.employeeName;
        object['role'] = info.getRole();
        object['id'] = info.ID;
        object['email'] = info.email;
        object['photoSource'] = info.photo;
        if (object['role'] === 'Team Leader') {
            object['office'] = info.office;
        } else if (object['role'] === 'Engineer') {
            object['github'] = info.github;
        }else if (object['role'] === 'Intern') {
            object['school'] = info.school
        }
        teamMembers.push(object);
}

function init(){
    console.log('Welcome!');
    addTeamLeader();
}


init();