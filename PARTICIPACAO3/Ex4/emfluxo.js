const fs = require("node:fs");
const path = require("node:path");

const localFile = path.join(__dirname, "huge_file.txt");

const init = Date.now();
const stream = fs.createReadStream(localFile, "utf-8");
stream.on("end", () => {
    const end = Date.now();
    console.log(`Total time (em fluxo): ${end - init} ms`); //8457 ms
})

stream.pipe(process.stdout);