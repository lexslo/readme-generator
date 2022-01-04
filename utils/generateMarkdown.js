// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;

    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;

    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;

    case 'Unilicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '[Read about MIT License](https://opensource.org/licenses/MIT)';
      break;

    case 'GNU GPLv3':
      return '[Read about GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'GNU AGPLv3':
      return '[Read about AGPL v3 License](https://www.gnu.org/licenses/agpl-3.0)';
      break;

    case 'Mozilla':
      return '[Read about MPL 2.0 License](https://opensource.org/licenses/MPL-2.0)';
      break;

    case 'Apache':
      return '[Read about Apache License](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'Boost':
      return '[Read about Boost License](https://www.boost.org/LICENSE_1_0.txt)';
      break;

    case 'Unilicense':
      return '[Read about Unlicense](http://unlicense.org/)';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return ` This application is covered under the ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contrib}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github}/)
If you have questions regarding this project, please email me at ${data.email}

`;
}

module.exports = generateMarkdown;
