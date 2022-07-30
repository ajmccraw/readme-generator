// TODO: Create a function that returns a license badge based on which license is passed in
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


// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
};

module.exports = generateMarkdown;
