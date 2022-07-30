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
        
    }
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
