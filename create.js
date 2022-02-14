#! /usr/bin/env node

const fs = require("fs-extra");
const installFolder = process.argv.slice(2)[0];
const path = require("path");
const gradient = require("gradient-string");

try {
  if (installFolder) {
    fs.copySync(path.join(__dirname, "./template"), "./" + installFolder);
    console.log("Copied base files");
    const rawdata = fs.readFileSync("./" + installFolder + "/package.json");
    const pkg = JSON.parse(rawdata);

    pkg.name = installFolder;

    const pkgStr = JSON.stringify(pkg, null, 2);
    fs.writeFileSync("./" + installFolder + "/package.json", pkgStr);

    console.log("Updated package.json");

    console.log("\n-----------\n");
    console.log(gradient.rainbow("Your Express API is ready! \n"));

    console.log("cd " + installFolder + "\n");
    console.log("npm i, to install dependencies");
    console.log("npm dev, to run");
  } else {
    throw "Please enter a project name";
  }
} catch (err) {
  console.error(err);
}
