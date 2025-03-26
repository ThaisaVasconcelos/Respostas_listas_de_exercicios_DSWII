//Deve importar a classe e as funções de user.js, importar o módulo express e criar um servidor web simples
//para realizar um get. O caminho get deve ser acessível para o caminho localhost:8080/user_data e receber
//como retorno a mensagem de texto User's name is Amazing and User's age is 100;

const express = require('express');
const { User, printName, printAge } = require('./user.js');

const app = express();
const port = 8080;

const user = new User('Amazing', 100);

app.get('/user_data', (req, res) => {
    const responseMessage = `${printName(user)} and ${printAge(user)}`; //User's name is Amazing and User's age is 100
    res.send(responseMessage);
}
);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/user_data`);
}
);