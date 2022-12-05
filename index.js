// install inquirer, filestream and require generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What is your repositories title?',
    },
    {
        type: "input",
        name: "description",
        message: 'Provide a description of the repository.',
    },
    {
        type: "input",
        name: "installation",
        message: 'What are the required steps to install the project?',
    },
    {
        type: "input",
        name: "usage",
        message: 'Provide instructions to use your repository.',
    },
    {
        type: "list",
        name: "license",
        message: 'Select which license you would like to use:',
        choices : [
            "APACHE 2.0",
            "GNU GPL 3.0",
            "MIT",
            "NONE"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: 'List the members who contributed to the repository.',
    },
    {
        type: "input",
        name: "tests",
        message: 'Are there any tests for the repository?',
    },
    {
        type: "input",
        name: "github",
        message: 'What is your GitHub user name?',
    },
    {    
        type: "input",
        name: "email",
        message: 'What is your email?',
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
      err ? console.log(err) : console.log('Success! README file created!')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
