/**Funções */
const numero1 = 10;
const numero2 = 20;

function soma(valor1, valor2) {
    var resultado = valor1 + valor2;
    return resultado;
}

function subtracao(valor1, valor2) {
    var resultado = valor1 - valor2;
    return resultado;
}

function multiplicacao(valor1, valor2) {
    var resultado = valor1 * valor2;
    return resultado;
}

function divisao(valor1, valor2) {
    var resultado = valor1 / valor2;
    return resultado;
}
function teoremaDePitatogorasFuncao(valor1, valor2) {
    var primeiraParteDaEquacao = multiplicacao(valor1, valor1);
    var segundaParteDaEquacao = multiplicacao(valor2, valor2);
    var resultado = soma(primeiraParteDaEquacao, segundaParteDaEquacao);
    return resultado;
}
var teoremaDePitatogoras1 = teoremaDePitatogorasFuncao(numero1, numero2);
console.log(Math.sqrt(teoremaDePitatogoras1));

