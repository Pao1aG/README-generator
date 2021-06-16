//Packages needed
const inquirer = require("inquirer"); //to generate questions with prompt

// TODO: Create an array of questions for user input--------------------------
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0"],
    },
    {
        type: "input",
        message: "What command should be used to install dependencies?",
        name: "dependencies"
    },
    {
        type: "input",
        message: "What command should be used to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repoUse"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "repoContribute"
    },
];

// TODO: Create a function to write README file------------------------
function writeToFile() {
    //FUNCTION FOR INQUIRER PROMPT
    inquirer  
    .prompt(questions)
    .then(function(data) {
        console.log("USER:", data); //success
        fs.writeFile("README.md", generateMarkdown(data), function(err) { //this function will create this file in this directory (if it doesn't already exist), and write content inside of generateMarkdown
            console.log("File Written");
        });
    });
};

writeToFile();

module.exports = writeToFile; //this references back
