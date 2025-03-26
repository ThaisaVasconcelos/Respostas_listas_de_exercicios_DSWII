//Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso. Dica: use a função “split” de
//uma string que quebra a string em pedaços dado um separador como argumento da função. Nesse caso, o separador é a barra
//(/) da data. Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”

function dataPorExtenso(data){
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let dataSplit = data.split("/");
    return dataSplit[0] + " de " + meses[dataSplit[1] - 1] + " de " + dataSplit[2];
}

console.log(dataPorExtenso("22/04/1983"));  // 22 de abril de 1983