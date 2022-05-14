var jogador1 = -1;
var jogador2 = -1;
var placarJogador1 = 0;
var placarJogar2 = 0;

jogador1 != -1 && jogador2 != -1 ?
    console.log("os jogadores sao invalidos") :
    console.log("os jogadores sao invalidos");

if (jogador1 > 0 && jogador2 > jogador1) {
    console.log("jogador 1", (placarJogador1 += 1));
} else if (jogador2 > 0) {
    console.log("jogador 2", (placarJogar2 += 1));
}

let array = ["valor1 ", "valor2", "valor 3"];

let obj = {
    nome: "wesley",
    idade: 20,
    sobrenome: "estevão",
};

for (let indice = 0; indice < array.length; indice++) {
    console.log(array);

    //percorrer todos os objetos
    for (i in obj) {
        console.log(i);
    }

    //percorrer todos os objetos da lista e imprimir

    for (i in array) {
        console.log(i);
    }

    // pegar os elementos dentro de um array
    for (i of array) {
        console.log(i);
    }

    var a = 0;

    while (a < 10) {
        a++;
        console.log(a);
    }

    let array = [1, 2, 3, 4, 5];

    let nuevo = array.reduce(function(total, num) {
        total = total * num;

        return total;
    });

    console.log(nuevo);
}