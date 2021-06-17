const fs = require("fs"); //to fs.writeFile
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//BADGES FOUND AT t.ly/92K9
function renderLicenseBadge(data) {
  console.log(data.license);
  if(data.license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license == "GNU GPL v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return ""
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license == "MIT") {
    return "[MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)"
  } else if (data.license == "Apache 2.0") {
    return "[Apache 2.0 License](https://github.com/moby/moby/blob/master/LICENSE)"
  } else if (data.license == "GNU GPL v3.0") {
    return "[GNU GPL v3.0 License](https://choosealicense.com/licenses/gpl-3.0/)"
  } else {
    return ""
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license == "MIT") {
    return "This project is licensed under the MIT License. To learn more visit "
  } else if (data.license == "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 License. To learn more visit "
  } else if (data.license == "GNU GPL v3.0") {
    return "This project is licensed under the GNEU General Public License v3.0. To learn more visit "
  } else {
    return ""
  };
}


// TODO: Create a function to generate markdown for README
//Need to call functions inside of here to access data values
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data)} 

## Description

${data.description}

## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Tests](#tests)

* [Usage](#usage)

* [Contributing](#contributing)

* [Questions](#questions)

## License

${data.license}

${renderLicenseSection(data)} 
> ${renderLicenseLink(data)}

## Installation

To install dependencies use the following in the command line: 

\`\`\`
${data.dependencies}
\`\`\`

## Tests

To test: 

\`\`\`
${data.tests}
\`\`\`

## Usage

\`\`\`
${data.repoUse}
\`\`\`

## Contributing

${data.repoContribute}

Check out my other repos at: <https://github.com/${data.username}>

## Questions

If you have any questions, please contact me at: ${data.email}
  
`
}

module.exports = generateMarkdown; //this references back to the generateMarkdown in index.js