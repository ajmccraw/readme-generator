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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
