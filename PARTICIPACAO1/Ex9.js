//Utilize as funções das Atividades 7 e 8 e cria uma nova função que as receba como parâmetro. A função deve mostrar o valor resultante:

//funçao atividade 7
function add(a, b) {
    return a + b;
}

//funçao atividade 8
multiply = (a, b) =>{
    return a * b;
}

executeFunction = (funcao, a, b) =>{
    return funcao(a, b);
}

console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6