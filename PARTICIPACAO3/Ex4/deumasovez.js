const fs = require("node:fs");
const path = require("node:path");

const localFile = path.join(__dirname, "/huge_file.txt");

const init = Date.now();
const text = fs.readFileSync(localFile, "utf-8");
console.log(text);
const end = Date.now();

console.log(text);
console.log(`Total time(de uma só vez): ${end - init} ms`); //8724 ms 