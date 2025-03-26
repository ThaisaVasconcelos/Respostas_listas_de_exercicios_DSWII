//Atividade 10. Suponha que o método toUpperCase não existisse em uma string. Implemente uma função toUpperCase
//que retorna o mesmo resultado da original.

function toUpperCase(string){
    let stringUpper = "";
    for(let i = 0; i < string.length; i++){
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
            stringUpper += String.fromCharCode(string.charCodeAt(i) - 32);
        else stringUpper += string[i];
    }
    return stringUpper;
}

console.log(toUpperCase("teste"));  // TESTE