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
        message: 'What is the name of this project?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?'
    },

    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your github repo?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe what this project is.'
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
        name: 'contributing',
        message: 'Any contributing sources?'
    },

    {
        type: 'list',
        message:'What license are you using?',
        name: 'License',
        choices: [
            'MIT', 
            'Mozilla', 
            'Apache'
        ]
    }
]






// function writeToFile(fileName, data) {}


// Function to initialize the app
function init() {
    inquirer.prompt(questions).then(function(userInput){
        const markdownString = generateMarkdown(userInput)

        // TODO: Create a function to write README file
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('Check out the generated README!');
            };
        });
        
    })
}


// Function call to initialize app
init();


// ***********************************************************


// User Story
// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project



// Acceptance Criteria
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README