//Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um array de
//arrays em um único array que contém todos os elementos dos arrays originais.

function achatar(array){
    return array.reduce((a, b) => a.concat(b), []);
}

console.log(achatar([[1, 2, 3], [4, 5], [6]]));  // [1, 2, 3, 4, 5, 6]