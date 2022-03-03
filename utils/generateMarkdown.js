
function renderTitleSection(data) {
  console.log(data.title)
  return `# ${data.title}`
}

// function renderLicenseBadge(license) {
//   if(license === "MIT"){
//     console.log(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)
//   } 
//   if(license === "Mozilla"){
//     `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
//   }
//   if(license === "Apache"){
//     `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   }
//   if(license === "GNU GPL v3"){
//     `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftMarkdown = 
  // starting to render out the title, outputs `# ${data.title}`

`${renderTitleSection(data)} 


## Description


${data.description}


## Installation


${data.installation}


## Usage


${data.information}


## Contributions


${data.guidelines}


## Tests


${data.instructions}


##### Github: ${data.github}


##### Email: ${data.email}

`

  renderTitleSection(data)
  return draftMarkdown;
  // renderLicenseBadge();

}

module.exports = generateMarkdown;
