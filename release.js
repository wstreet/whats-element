const pkg = require("./package.json");
const semver = require("semver");
const fs = require('fs')

// major, premajor, minor, preminor, patch, prepatch, or prerelease
let releaseType = process.argv[2];

if (!releaseType) {
  releaseType = "patch";
}

let version = pkg.version;
pkg.version = semver.inc(version, releaseType);

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, '\t'), 'utf-8')

console.log(`release version is ${pkg.version}`)
// git add and commit 、push