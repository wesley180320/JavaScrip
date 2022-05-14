function calculadora() {

    const operacao = Number(prompt(' Escolha uma operação:\n 1 soma (+)\n 2 - subtração (-)\n 3 - Multiplicação (*)\n'));

    let n1 = Number(prompt("insira o primeiro valor"));
    let n2 = Number(prompt("insira o segundo valor"));
    let resultado;


    function soma() {

        resultado = n1 + n2;

        alert(resultado)

    }

    function subtração() {

        resultado = n1 - n2;

        alert(resultado)
    }


    function multiplicação() {

        resultado = n1 * n2;

        alert(resultado)
    }


    if (operacao == 1) {

        soma();
    }

    if (operacao == 2) {

        subtração();

    }

    if (operacao == 3) {

        multiplicação();

    }
}

calculadora();