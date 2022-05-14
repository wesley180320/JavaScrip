function funcao(n1, n2) {
    if (n1 == n2) {
        console.log("Numeros iguais.");
    } else {
        console.log(" Os numeros", n1, "e", n2, "não são iguais.");
    }

    let soma = n1 + n2;

    console.log("Sua soma é", soma);

    if (soma > 10) {
        console.log(" Que e maior que 10 ");
    } else {
        console.log("Que e menor que 10");
    }

    if (soma < 20) {
        console.log(" Que e menor que 20 ");
    } else {
        console.log("Que e maior que 20");
    }
}

funcao(11, 11);