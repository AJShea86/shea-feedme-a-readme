
function renderTitleSection(data) {
  console.log(data.title)
  return `# ${data.title}`
}

function renderLicenseBadge(data) {
  let markup = ""

for(let i = 0; i < data.license.length; i++){
  const license = data.license[i]
  if(license === "MIT"){
    markup += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  if(license === "Mozilla"){
    markup += `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if(license === "Apache"){
    markup += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "GNU GPL v3"){
    markup += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

return markup

}

function renderToC(data){
  let buildToC = `## Table of Contents`;

  if (data.description !== '') { buildToC += `
  * [Description](#description)` };

  if (data.installation !== '') { buildToC += `
  * [Installation](#installation)` };

  if (data.contributing !== '') { buildToC += `
  * [Usage](#usage)` };

  if (data.guidelines !== '') { buildToC += `
  * [Contributions](#contributions)` };

  if (data.instructions !== '') { buildToC += `
  * [Tests](#tests)` };

  if (data.license !== '') { buildToC += `
  * [License](#license)` };

return buildToC
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftMarkdown = 
  // starting to render out the title, outputs `# ${data.title}`

` ${renderLicenseBadge(data)}
${renderTitleSection(data)} 
${renderToC(data)}


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


## License


${data.license}


##### Github: ${data.github}


##### Email: ${data.email}

`

  renderTitleSection(data)
  return draftMarkdown;
  // renderLicenseBadge();

}

module.exports = generateMarkdown;
