// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: "input",
//         message: "What is the title of the project?",
//         name: "title",
//       },
//       {
//         type: "input",
//         message: "Write a description of the project.",
//         name: "description",
//       },
//       {
//         type: "input",
//         message: "Describe the steps needed to install your project.",
//         name: "installation",
//       },
//       {
//         type: "input",
//         message: "Provide instructions or examples of your project in use.",
//         name: "usage",
//       },
//       {
//         type: "input",
//         message: "Enter guidelines on how other developers can contribution to this project.",
//         name: "guidelines",
//       },
//       {
//         type: "input",
//         message: "Provide tests written for the project and examples on how to run them.",
//         name: "instructions",
//       },
//       {
//         type: "checkbox",
//         message: "Choose a license for the project.",
//         choices: ["License 1", "License 2", "License 3", "License 4"],
//         name: "license",
//       },
//       {
//         type: "input",
//         message: "Enter your Github username.",
//         name: "github",
//       },
//       {
//         type: "input",
//         message: "Enter your email.",
//         name: "email",
//       },    
// ];

// // TODO: Create a function to write README file
// function writeToFile(README, data) {
//     fs.writeToFile(README, data, err => {
//         if (err) {
//             return console.log(err);
//           }
        
//           console.log(data)
//       });
//   }
  

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();




inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of the project.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter instructions for installation.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage information.",
      name: "information",
    },
    {
      type: "input",
      message: "Enter contribution guidelines.",
      name: "guidelines",
    },
    {
      type: "input",
      message: "Enter test instructions.",
      name: "instructions",
    },
    {
      type: "checkbox",
      message: "Choose a license for the application.",
      choices: ["License 1", "License 2", "License 3", "License 4"],
      name: "license",
    },
    {
      type: "input",
      message: "Enter your Github username.",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email",
    },
  ])

  .then((data) => {
    console.log(data);
    const finalResult = generateMarkdown(data);

    fs.writeFile("README.md", finalResult, (err) =>
      err ? console.error(err) : console.log(data)
    );


  });
