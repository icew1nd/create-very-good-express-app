#! /usr/bin/env node

var fs = require("fs-extra");
var installFolder = process.argv.slice(2)[0];
var path = require("path");
try {
  fs.copySync(path.join(__dirname, "./template"), "./" + installFolder);
  console.log("Copied base files");
  const rawdata = fs.readFileSync("./" + installFolder + "/package.json");
  const pkg = JSON.parse(rawdata);

  pkg.name = installFolder;

  const pkgStr = JSON.stringify(pkg, null, 2);
  fs.writeFileSync("./" + installFolder + "/package.json", pkgStr);

  console.log("Updated package.json");

  console.log("\n-----------\n");
  console.log("Your project is ready, get started by \n");

  console.log("cd " + installFolder + "\n");
  console.log("npm i, to install dependencies");
  console.log("npm dev, to run");
} catch (err) {
  console.error(err);
}
