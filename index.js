// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const testData = {
//   title: 'Project Feedme a Readme',
//   description: 'This is a description without any details',
//   installation: 'Here are some instructions to do nothing',
//   information: 'use this to help create a readme',
//   guidelines: 'give me monetary contributions please',
//   instructions: 'Any testing stuff goes here',
//   license: [ 'License 1' ],
//   github: 'AJShea86@github.com',
//   email: 'andrewsheamls@gmail.com'
// }

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
    {
      type: "checkbox",
      message: "Choose a license for the application.",
      choices: ["MIT", "Mozilla", "Apache", "GNU GPL v3"],
      name: "license",            

      
    },
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
    const finalResult = generateMarkdown(data);

    fs.writeFile("README.md", finalResult, (err) =>
      err ? console.error(err) : console.log("Success!")
    );


  });

// these are the badges for the licenses

  // const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

  // const mozillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  // const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  // const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";