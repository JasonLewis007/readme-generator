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
  return `# ${data.title}

`;
}

const fs = require('fs');

const generatelicense = (type) => {
  let color;
  if (type === "MIT") color = "goldenrod";
  if (type === "Apache") color = "blue";
  if (type === "MPL") color = "green";
  if (type === "CC") color = "purple";
  if (type === "NONE") color = "red";

  return (
    `
## License
<img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />
  `
  );

};

module.exports = generateMarkdown;
