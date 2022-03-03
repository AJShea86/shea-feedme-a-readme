// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const testData = {
  title: 'Project Shea',
  description: 'This is a description',
  installation: 'Here are some instructions',
  information: 'this is usage info',
  guidelines: 'give me money',
  instructions: 'test here',
  license: [ 'License 1' ],
  github: 'ajshea86',
  email: 'afafd@dfas.com'
}

inquirer
  .prompt([
    // {
    //   type: "input",
    //   message: "What is the title of the project?",
    //   name: "title",
    // },
    // {
    //   type: "input",
    //   message: "Enter a description of the project.",
    //   name: "description",
    // },
    // {
    //   type: "input",
    //   message: "Enter instructions for installation.",
    //   name: "installation",
    // },
    // {
    //   type: "input",
    //   message: "Enter usage information.",
    //   name: "information",
    // },
    // {
    //   type: "input",
    //   message: "Enter contribution guidelines.",
    //   name: "guidelines",
    // },
    // {
    //   type: "input",
    //   message: "Enter test instructions.",
    //   name: "instructions",
    // },
    // {
    //   type: "checkbox",
    //   message: "Choose a license for the application.",
    //   choices: ["License 1", "License 2", "License 3", "License 4"],
    //   name: "license",
    // },
    // {
    //   type: "input",
    //   message: "Enter your Github username.",
    //   name: "github",
    // },
    // {
    //   type: "input",
    //   message: "Enter your email.",
    //   name: "email",
    // },
  ])

  .then((data) => {
    console.log(data);
    const finalResult = generateMarkdown(testData);

    fs.writeFile("README.md", finalResult, (err) =>
      err ? console.error(err) : console.log(data)
    );


  });
