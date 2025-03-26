// Ex. 3 Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando 
//fornecido [1, 2, 3] como argumento.

function arrayToList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([1,2,3]));  // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

//Ex. 4 Também escreva uma função listToArray que produza um array a partir de uma lista.

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([1,2,3])));  // [1, 2, 3]

//Ex. 5 Adicione uma função auxiliar prepend, que recebe um elemento e uma lista, e cria uma nova
//lista que adiciona o elemento na frente da lista de entrada

function prepend(element, list){
    return {value: element, rest: list};
}

console.log(prepend(0, arrayToList([1,2,3])));  // { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }

//Ex. 6 Crie uma funççao chamada nth, que recebe uma lista e um número, e retorna o elemento na posição fornecida
// na lista (com zero referindo-se ao primeiro elemento) ou undefined quando não há tal elemento.

function nth(list, n){
    if(!list) return undefined;
    else if(n == 0) return list.value;
    else return nth(list.rest, n-1);
}

console.log(nth(arrayToList([1,2,3]), 0));  // 1
console.log(nth(arrayToList([1,2,3]), 1));  // 2
console.log(nth(arrayToList([1,2,3]), 2));  // 3
console.log(nth(arrayToList([1,2,3]), 3));  // undefined