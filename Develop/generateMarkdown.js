// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  
  //Return an empty string
  if(!license) {
    return '';
    
    // Return MIT badge
  } if (license === 'MIT'){
    return `![APM](https://img.shields.io/apm/l/readme)`
    
    // Return Apache badge
  } else if (license === 'Apache') {
    return `![AUR license](https://img.shields.io/aur/license/readme)`
  }

};


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  //Return an empty string
  if (!license) {
    return '';

    //Return MIT license link
  } if (license === 'MIT') {
    return `[View MIT license link](https://opensource.org/licenses/MIT)`
    
    //Return Apache license link
  } if (license === 'Apache') {
    return `[View Apache license link](https://www.apache.org/licenses/LICENSE-2.0)`
  }

};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  // Empty string
  if (!license) {
    return '';
  
    // MIT
  } if (license === 'MIT') {
    return 'Licensing is provided by MIT.'
  
    // Apache
  } else if (license === 'Apache') {
    return 'Licensing is provided by Apache'
  }

};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  <br />

  ## Description
  ${data.description}
  <br />

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing Sources](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  * GitHub Username: <a name = "questions">[${data.github}](https://github.com/${data.github})</a>
  * Email: <a name = "questions">${data.email}</a>
`;
};

module.exports = generateMarkdown;
