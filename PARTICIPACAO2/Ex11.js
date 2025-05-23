//O método some da classe array retorna true para verificar se pelo menos um dos elementos desse array
//atende a um critério especificado por uma função passada como argumento. Os arrays possuem também um
//método chamado every. Este retorna true quando a função fornecida retorna true para cada elemento no
//array. De certa forma, some é uma versão do operador || que atua em arrays, e every é como o operador
// &&. Implemente a sua própria função every como uma função que recebe um array e uma função como parâmetros.
//Escreva essa versão utilizando um loop

function every(array, test){
    for(let i = 0; i < array.length; i++){
        if(!test(array[i])) return false;
    }
    return true;
}

console.log(every([1, 2, 3], n => n < 10));  // true
console.log(every([8, 9, 10], n => n < 10));  // false
