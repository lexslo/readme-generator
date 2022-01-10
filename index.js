// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Describe the project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?',
        validate: descInput => {
          if (descInput) {
            return true;
          } else {
            console.log('Please enter a description');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter installation instructions');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please include instructions for use');
            return false;
          }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla', 'Apache', 'Boost', 'Unilicense']
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'What are the guidelines for contributing to this project?',
        validate: contribInput => {
            if (contribInput) {
              return true;
            } else {
              console.log('Please include contribution guidelines');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the project be tested?',
        validate: testsInput => {
            if (testsInput) {
              return true;
            } else {
              console.log('Please include instructions for testing');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      }
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./dist/readme.md', data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Readme successfully created!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(questions => {
    const readmeData = generateMarkdown(questions);
    return readmeData;
  })
  .then(readmeData => {
    return writeToFile(readmeData);
  })
  .catch(err => {
    console.log(err);
  });
