
function renderTitleSection(data) {
  console.log(data.title)
  return `# ${data.title}`
}

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
  let draftMarkdown = 
  // starting to render out the title, outputs `# ${data.title}`

`${renderTitleSection(data)} 


![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.email}/${data.github}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.email}/${data.github}?style=flat&logo=appveyor)



## Description: 


${data.description}


## Installation: 


${data.installation}


## Usage: 


${data.information}


## Contributions: 


${data.guidelines}


## Tests: 


${data.instructions}


## License: 


${data.license}


##### Github: 


${data.github}


##### Email: 


${data.email}

`

  renderTitleSection(data)
  return draftMarkdown;

}

module.exports = generateMarkdown;
