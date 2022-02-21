// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your porject?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the correct license for this project.',
        choices: [
            "Appache",
            "GNU",
            "ISC",
            "MIT",
            "OPEN"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributers for this project?'
    },
    {
        type: 'input',
        name: 'GitHubUsername',
        message: 'what us your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
