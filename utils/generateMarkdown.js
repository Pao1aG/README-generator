// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

## Installation

To install dependencies use: 

\`\`\`
${data.dependencies}
\`\`\`

## Tests

To test: 

\`\`\`
${data.tests}
\`\`\`

## Usage

${data.repoUse}

## Contributing

${data.repoContribute}

## Questions

If you have any questions, please contact me at: ${data.email}
  
`
}

module.exports = generateMarkdown; //this references back to the generateMarkdown in index.js
