//
// AJ McCraw
// Module 9
// *********************************************************************

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Application title?'
    },

    {
        type: 'input',
        name: 'github',
        message: "Enter your github username please."
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Enter the name of your github repo.'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application.'
    },

    {
        type: "input",
        name: 'documentation',
        message: 'Describe the installation process and instructions.'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How will your application be used?'
    },

    {
        type: 'input',
        name: 'screenshot',
        message: 'Please enter relative path for the screenshot image.'
    },

    {
        type: 'input',
        name: 'features',
        message: 'What are the main features of your application?'
    },

    {
        type: 'input',
        name: 'acknowledgements',
        message: 'Who else contributed to this application?'
    },

    {
        type: 'list',
        message:'What license are you using?',
        name: 'License',
        choices: ['MIT', 'W3C', 'AWS']
    },
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
