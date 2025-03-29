//Crie um programa javascript que receba como argumento no comando “node meuScript.js meuarquivo.txt”. 
// O programa deve ler o arquivo linha por linha a apresentá-las no console.


const fs = require("node:fs");
const path = require("node:path");
const readline = require("readline");

const fileName = process.argv[2];

if (!fileName) {
    console.error("Forneça o nome do arquivo como argumento.");
    process.exit(1);
}

const localFile = path.join(__dirname, fileName);

if (!fs.existsSync(localFile)) {
    console.error("Arquivo não encontrado.");
    process.exit(1);
}

const read = readline.createInterface({
    input: fs.createReadStream(localFile),
    output: process.stdout,
    terminal: false
})

read.on("line", (line) => {
    console.log(line);
});

read.on("close", () => {
    console.log("\nLeitura do arquivo concluída.");
});