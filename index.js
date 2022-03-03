const inquirer = require("inquirer");
const fs = require('fs');


inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Enter a description of the project.",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "Enter instructions for installation.",
      name: "projectInstall",
    },
    // {
    //   type: "input",
    //   message: "Enter usage information.",
    //   name: "projectInformation",
    // },
    // {
    //   type: "input",
    //   message: "Enter contribution guidelines.",
    //   name: "projectGuidelines",
    // },
    // {
    //   type: "input",
    //   message: "Enter test instructions.",
    //   name: "projectInstructions",
    // },
    // {
    //   type: "checkbox",
    //   message: "Choose a license for the application.",
    //   choices: ["License 1", "License 2", "License 3", "License 4"],
    //   name: "projectLicenseChoice",
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
    // console.log(data);

    fs.appendFile("README.md", JSON.stringify(data) + "\n", (err) =>
      err ? console.error(err) : console.log(data)
    );
  });
